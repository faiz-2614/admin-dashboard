import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/userSlice';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function LoginForm() {
 const [userName,setUserName] = useState("");
 const dispatch = useDispatch();
 const { loginWithRedirect } = useAuth0();
 const { user, isAuthenticated, isLoading } = useAuth0(); 


 const validateAndLogIn = async() => {
    
    if (userName && userName.length > 0 ){
        await loginWithRedirect()
        console.log ("here",user,isAuthenticated)
        dispatch(setUser({user,isAuthenticated,isLoading}))
    }
    }

  return (
    <Container maxWidth="xs" style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh"}}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Looo
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={validateAndLogIn}>
          Sign In
        </Button>
      </Paper>
    </Container>
  );
}

export default LoginForm;
