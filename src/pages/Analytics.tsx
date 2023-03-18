import React from 'react';
import { DiscordDataPackage } from '../types';

type Props = {
  dataPackage: DiscordDataPackage;
};

export const Analytics: React.FunctionComponent<Props> = ({
  dataPackage,
}) => {
  return (
    <div>
      <h1>Analytics</h1>
    </div>
  );
};
