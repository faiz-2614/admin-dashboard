import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserComponent from './UserComponent';

const AppBarComponent = ({user}) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Invoice Management Application
      </Typography>
      
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon />
          <UserComponent/>
        </div>
      
    </Toolbar>
  </AppBar>
  )
}

export default AppBarComponent