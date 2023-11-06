import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBarComponent from '../components/AppBar';
import { useTheme } from '@emotion/react';

function HomePage({tabsConfig }) {
  const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      console.log(newValue);
      setValue(newValue);
    };
  
    return (
      <>
      <div style={{
    height: "20%"
}}>
       
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
            />
          ))}
        </Tabs>
        
        
        
      </div>
      <div style={{width:"100%",padding:"2%", height:"80%", backgroundColor:theme.palette.primary.light}}>
      {tabsConfig[value]?.component}
      </div>
      </>
    );
  }
  
  export default HomePage;
  