import React from 'react';
import HomePage from './pages/Homepage'; // Import your HomePage component
import HomeContent from './pages/HomeContent'; // Import the component for the "Home" tab
import Layout from './pages/Layout'; // Import the component for the "Profile" tab
import tabsConfig from './config/config'



function App() {
  return (
    <HomePage user={true} tabsConfig={tabsConfig} />
  );
}

export default App;
