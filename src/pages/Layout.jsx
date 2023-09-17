import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Layout({ children }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Your Logo
          </Typography>
          {/* Add user information if logged in */}
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '64px' }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
