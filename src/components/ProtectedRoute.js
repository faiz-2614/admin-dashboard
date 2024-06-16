import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ path, element, userSignIn }) {

  const userData = useSelector(state => state.user)
  console.log(userData)
  if (userData) {
    console.log("Heere")
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
