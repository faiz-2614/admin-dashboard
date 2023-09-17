import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Link } from 'react-router-dom'; // You might need React Router for navigation4
import AppBarComponent from '../components/AppBar';

function HomePage({ user, tabsConfig }) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
       
        <AppBarComponent/>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              component={Link}
              to={tab.link}
            />
          ))}
        </Tabs>
  
        {/* Render the content of the selected tab here */}
      </div>
    );
  }
  
  export default HomePage;
  