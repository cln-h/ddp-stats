import * as _ from 'lodash';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { DiscordDataPackage } from '../types';
import { discordDataPackageTemplate } from '../utils';
import { csvToObjArr } from '../utils/csv';
import { LoadingSpinner } from './Loading';

type Props = {
    setDataPackage: React.Dispatch<React.SetStateAction<DiscordDataPackage>>;
    setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropzone: React.FunctionComponent<Props> = ({ setDataPackage, setDataLoaded }: Props) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const onDrop = React.useCallback((acceptedFiles: any) => {
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
        const dataPackage: DiscordDataPackage = discordDataPackageTemplate;

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
                    const objPath = zPath.join('.').slice(0, -4);
                    const raw = evt.target?.result;
                    if (typeof raw !== 'string') {
                        console.error('Failed to parse csv. Exiting.')
                        return;
                    }
                    const arr = csvToObjArr(raw);
                    const base = _.get(dataPackage, objPath) ?? []
                    _.set(dataPackage, objPath, base.concat(arr));
                }
                reader.readAsText(zfile);
            } else {
                // parse json
                // json files are formatted as json line-by-line. Reading the full file would result in failure due to invalid json object
                reader.onload = (evt) => {
                    const objPath = zPath.join('.').slice(0, -5);
                    const raw = evt.target?.result;
                    if (typeof raw !== 'string') {
                        console.error('Failed to parse json. Exiting.')
                        return;
                    }
                    const jsonLines = raw.split('\n');
                    jsonLines.map((line) => JSON.parse(line));
                    const base = _.get(dataPackage, objPath) ?? 0;
                    _.set(dataPackage, objPath, base.concat(jsonLines));
                }
                reader.readAsText(zfile);
            }
            setDataPackage(dataPackage)
            setDataLoaded(true);
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
    );
}