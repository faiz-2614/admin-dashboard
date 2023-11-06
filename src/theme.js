// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#164863',
      light: '#427D9D',
      dark: '#0C2B43',
    },
    secondary: {
      main: '#9BBEC8',
      light: '#C2D3D8',
      dark: '#748F99',
    },
    background: {
      default: '#DDF2FD',
      paper: '#F0FAFF',
    },
  },
  // ... other customizations
});

export default theme;
