import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { DiscordDataPackage } from '../types';
import { useTheme } from '@mui/material/styles';

type Props = {
  dataPackage: DiscordDataPackage;
};

export const Analytics: React.FunctionComponent<Props> = ({ dataPackage }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={12} sx={{ height: '8vh' }}>
          <Typography
            variant='h3'
            align='center'
            color={theme.palette.text.secondary}
          >
            Discord Data Package Explorer
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ height: '90vh' }}>
          <Paper
            elevation={8}
            sx={{ margin: '10px', marginRight: '5px', height: '100%' }}
          >
            <Box p={2}>
              <Typography variant='h5'>Analytics</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8} sx={{ height: '90vh' }}>
          <Paper
            elevation={8}
            sx={{ margin: '10px', marginLeft: '5px', height: '100%' }}
          >
            <Box p={2}>
              <Typography variant='h5'>General</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
