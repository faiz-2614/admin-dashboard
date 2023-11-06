import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../reducers/userSlice';
import { Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { setUser } from '../reducers/userSlice';

function UserComponent() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth0();
  
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  useEffect(() => {
    dispatch(setUser({user,isAuthenticated}));
 }, [user])

  const handleClearUser = () => {
    dispatch(clearUser());
    logout({ logoutParams: { returnTo: "http://localhost:3000/login"}})
  };

  const handleDashboard = () => {
    navigate("/dashboard")
  };

  return (
    <div>
      {user &&
        <div style={{ width:"21vw"}}>
          <Grid container >
            <Grid item  xs={8} >
            Welcome, {user?.name}
            <Button style={{backgroundColor:"black", color:"white"}} onClick={handleClearUser}>Logout</Button>
            </Grid>
            <Grid item xs ={4}>
         
          <Button style={{backgroundColor:"black", color:"white"}} onClick={handleDashboard}>Dashboard</Button>
            </Grid>
          </Grid>
          
        </div> 
      //   <div >
      //   <Button style={{backgroundColor:"black", color:"white"}} onClick={handleLoginUser}>Login</Button>
      // </div> 
      }
    </div>
  );
}

export default UserComponent;
