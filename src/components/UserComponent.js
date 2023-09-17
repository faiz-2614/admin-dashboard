import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../reducers/userSlice';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function UserComponent() {
  const user = useSelector((state) => state.user);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleClearUser = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div>
      {user &&
        <div >
          Welcome, {user.name}
          <Button style={{backgroundColor:"black", color:"white"}} onClick={handleClearUser}>Logout</Button>
        </div>
}
    </div>
  );
}

export default UserComponent;
