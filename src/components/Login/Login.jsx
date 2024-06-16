import React, {  useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/userSlice';
import { useNavigate } from "react-router-dom";


function LoginForm() {
 const [userName,setUserName] = useState("");
 const [password,setPassword] = useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate(); 


 const validateAndLogIn = async() => {
    if (userName && userName.length > 0 && password && password.length >0){     
        dispatch(setUser({}))
        navigate('/');    
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
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter your parword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={validateAndLogIn}>
          Sign In
        </Button>
      </Paper>
    </Container>
  );
}

export default LoginForm;
