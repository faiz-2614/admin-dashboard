import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate,  } from 'react-router-dom';

function ProtectedRoute({ path, element, userSignIn }) {

  const isAuthenticated = useSelector(state => state?.user?.isAuthenticated)
  console.log("State",isAuthenticated)

  if (true) {
    console.log("Heere")
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
