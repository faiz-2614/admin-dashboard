// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import App from '../App';

// Check if the user is signed in (you can implement your own logic here)
const isUserSignedIn = true; // Replace with your authentication logic

function ProtectedRoute({ path, element }) {
    // console.log(ComponentToRender)
  if (isUserSignedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
