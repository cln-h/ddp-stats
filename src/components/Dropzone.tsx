import * as _ from 'lodash';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { DiscordDataPackage, DiscordDataPackageMessage } from '../types';
import { baseDiscordDataPackage } from '../utils';
import { csvToObjArr } from '../utils/csv';
import { LoadingSpinner } from './Loading';

/** Keeping this here for now as an example */
const handleOnDropExample = async (zippedFile: File) => {
    const zip = await JSZip.loadAsync(zippedFile);
    for (let zobj of Object.values(zip.files)) {
        if (zobj.dir) continue;
        if (zobj.name.slice(-4) !== '.csv' && zobj.name.slice(-5) !== '.json') continue;
        const zblob = await zobj.async("blob");
        const zfile = new File([zblob], zobj.name, {
            lastModified: zobj.date.getTime(),
            type: 'application/zip'
        });
        if (zfile.name.slice(-5) === '.json') {
            const reader = new FileReader();
            reader.onload = (evt) => { console.log('evt.target: ', evt.target?.result) };
            reader.readAsText(zfile);
        }
    }
}

type Props = {
    setDiscordData: React.Dispatch<React.SetStateAction<DiscordDataPackage>>;
    setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropzone: FunctionComponent<Props> = ({ setDiscordData, setDataLoaded }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onabort = () => console.warn('File reading was aborted');
            reader.onerror = () => console.error('File reading has failed');
            reader.onload = () => handleOnDrop(file);
            reader.readAsArrayBuffer(file);
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    // TODO: Verify the file structure at some point. Maybe a utility function. Could feed it the ones where f.dir is true
    // TODO: Image Parsing for icons?
    const handleOnDrop = async (zippedFile: File) => {
        setLoading(true);
        const dataPackage: DiscordDataPackage = baseDiscordDataPackage;

        const zip = await JSZip.loadAsync(zippedFile);
        for (let zobj of Object.values(zip.files)) {
            if (zobj.dir) continue;
            if (zobj.name.slice(-4) !== '.csv' && zobj.name.slice(-5) !== '.json') continue;
            const fileType = zobj.name.slice(-4) === '.csv' ? 'csv' : 'json';
            const zPath = zobj.name.split('/');
            const zblob = await zobj.async('blob');
            const zfile = new File([zblob], zobj.name, {
                lastModified: zobj.date.getTime(),
                type: 'application/zip'
            });

            const reader = new FileReader();
            if (fileType === 'csv') {
                // parse csv
                reader.onload = (evt) => { 
                    const raw = evt.target?.result;
                    if (typeof raw !== 'string') {
                        console.error('Failed to parse csv. Exiting.')
                        return;
                    }
                    const arr = csvToObjArr(raw);
                    switch (zPath[0]) {
                        case ('messages'): {
                            const path = 'messages.records.messages';
                            const records: DiscordDataPackageMessage[] = _.get(dataPackage, path);
                            _.set(dataPackage, path, records ? records.concat(arr) : arr)
                            break;
                        }
                        default: {
                            // Unhandled so skip
                            break;
                        }
                    }
                    // _.set(dataPackage, `${objectPath}.${key}_entries.${key}`, arr);
                }
                reader.readAsText(zfile);
            } else {
                // parse json
            }
        }
        console.log('dataPackage: ', dataPackage);
        setLoading(false);
    }

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop your file or here or click to browse</p>
            {loading && <LoadingSpinner />}
        </div>
    )
}