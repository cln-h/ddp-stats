import React, { FunctionComponent, useState } from "react";
import { DiscordDataPackage } from "../types";
import { baseDiscordDataPackage } from "../utils";
import { Dropzone } from "./Dropzone";

type Props = {};

export const Dashboard: FunctionComponent<Props> = (props: Props) => {
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [discordData, setDiscordData] = useState(baseDiscordDataPackage)

    return (
        <div>
            <Dropzone setDataLoaded={setDataLoaded} setDiscordData={setDiscordData} />
        </div>
    )
}