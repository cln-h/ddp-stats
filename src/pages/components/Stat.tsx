import { Typography } from '@mui/material';
import React from 'react';

type StatProps = {
  prompt: string;
};

export const Stat: React.FunctionComponent<StatProps> = ({ prompt }) => {
  return (
    <div>
      <Typography>{prompt}</Typography>
    </div>
  );
};
