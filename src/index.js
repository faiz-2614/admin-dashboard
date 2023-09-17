import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/configureStore'
import LoginForm from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute path="/" element={<App />} />
  },
  {
    path: "/home",
    element: <ProtectedRoute path="/" element={<App/>} />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


