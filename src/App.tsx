import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { discordTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={discordTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
