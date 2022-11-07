import { GenericObject } from "../types";

/**
 * Serializes csv to an object
 * @param {string} csv A string containg the contents of a csv file
 * @returns {GenericObject[]}
 */
export const csvToObjArr = (csv: string, delimiter: string = ','): GenericObject[] => {
    const lines = csv.split('\n');
    const keys = lines[0].split(delimiter);
    const result: GenericObject[] = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(delimiter);
        const lineObj: GenericObject = {};
        for (let j = 0; j < line.length; j++) {
            lineObj[keys[j]] = line[j];
        }
        result.push(lineObj);
    }
    return result;
}