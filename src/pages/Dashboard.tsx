import React, { FunctionComponent, useState } from 'react';
import { DiscordDataPackage } from '../types';
import { discordDataPackageTemplate } from '../utils';
import { Dropzone } from './components/Dropzone';

type Props = {};

export const Dashboard: FunctionComponent<Props> = (props: Props) => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [dataPackage, setDataPackage] = useState(discordDataPackageTemplate);

  return (
    <div>
      <Dropzone setDataLoaded={setDataLoaded} setDataPackage={setDataPackage} />
    </div>
  );
};
