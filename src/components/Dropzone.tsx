import * as fs from 'fs';
import React, { FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { DiscordDataPackage } from '../types';
import { baseDiscordDataPackage } from '../utils';

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
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('File reading was aborted');
            reader.onerror = () => console.log('File reading has failed');
            reader.onload = () => handleOnDrop(file);
            reader.readAsArrayBuffer(file);
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    // TODO: Verify the file structure at some point. Maybe a utility function. Could feed it the ones where f.dir is true
    const handleOnDrop = async (zippedFile: File) => {
        const dataPackage: DiscordDataPackage = baseDiscordDataPackage;

        const zip = await JSZip.loadAsync(zippedFile);
        for (let zobj of Object.values(zip.files)) {
            if (zobj.dir) {
                // set up directories
            }
            
        }
    }

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop your file or here or click to browse</p>
        </div>
    )
}