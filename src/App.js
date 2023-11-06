import React from 'react';
import HomePage from './pages/Homepage'; // Import your HomePage component
import tabsConfig from './config/config'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';



function App() {
  return (
    <>
   
    <CssBaseline />
    <HomePage tabsConfig={tabsConfig} />
   
   
    </>
  
  );
}

export default App;
