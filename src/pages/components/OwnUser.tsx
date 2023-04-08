import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

type OwnUserProps = {
  username: string;
  userTag: string;
  imgUrl: string;
};

export const OwnUser: React.FunctionComponent<OwnUserProps> = ({
  username,
  userTag,
  imgUrl,
}) => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <img
            style={{
              background: `url(${imgUrl})`,
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              padding: '10px',
            }}
            src={imgUrl}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>{username}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>{userTag}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
