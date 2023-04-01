import React from 'react';
import { DiscordDataPackage } from '../types';
import { discordDataPackageTemplate } from '../utils';
import { Analytics } from './Analytics';
import { Dropzone } from './components/Dropzone';

export const Dashboard: React.FunctionComponent = () => {
  const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);
  const [dataPackage, setDataPackage] = React.useState<DiscordDataPackage>(discordDataPackageTemplate);

  return (
    <div>
      {/* <Dropzone setDataLoaded={setDataLoaded} setDataPackage={setDataPackage} /> */}
      <Analytics dataPackage={discordDataPackageTemplate} />
    </div>
  );
};
