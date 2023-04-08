import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

type UserProps = {
  ranking: number;
  imgUrl: string;
  username: string;
  userTag: string;
  messageCount: number;
};

const User: React.FunctionComponent<UserProps> = ({ ranking, imgUrl, username, userTag, messageCount }) => {
  const gold = '#FFD700';
  const silver = '#C0C0C0';
  const bronze = '#CD7F32';
  const grey = '#808080';
  const color =
    ranking === 1 ? gold : ranking === 2 ? silver : ranking === 3 ? bronze : grey;

  return (
    <Grid container xs={12}>
      <Grid item xs={2}>
        <div
          style={{
            borderRadius: '100%',
            width: '30px',
            height: '30px',
            padding: '10px',
            background: color,
            color: '#fff',
            textAlign: 'center',
            fontSize: '30px',
          }}
        >
          {ranking}
        </div>
      </Grid>
      <Grid item xs={2}>
        <img style={{
          background: `url(${imgUrl})`,
          borderRadius: '100%',
          width: '30px',
          height: '30px',
          padding: '10px',
        }} src={imgUrl} />
      </Grid>
      {/** TODO: Make this a username and # */}
      <Grid item xs={6}>
        <Typography>{username}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{`${messageCount} messages`}</Typography>
      </Grid>
    </Grid>
  );
};

export const TopUsers: React.FunctionComponent = () => {
  return <Paper></Paper>;
};
