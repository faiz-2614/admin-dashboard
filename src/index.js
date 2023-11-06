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
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './pages/Dashboard';
import InvoiceForm from './components/Invoice/InvoiceForm';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute path="/" element={<App />}  />
  },
  {
    path: "/home",
    element: <ProtectedRoute path="/" element={<App />} />
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute path="/dashboard" element={<Dashboard />} />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/newInvoice",
    element: <InvoiceForm />
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-t07jdbwjgfscwfgj.uk.auth0.com"
        clientId="JfDJubk73lPqsNOdbZTHFJbL5AvZ7bbR"
        authorizationParams={{
          redirect_uri: "http://localhost:3000/"
        }}
      >
        <RouterProvider router={router} />

      </Auth0Provider>

    </Provider>
    </ThemeProvider>
    
  </React.StrictMode>
);


