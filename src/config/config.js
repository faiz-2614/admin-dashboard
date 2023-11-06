import InvoiceList from "../components/Invoice/InvoiceList";
import LoginForm from "../components/Login";
import Dashboard from "../pages/Dashboard";
import HomeContent from "../pages/HomeContent";

const tabsConfig = [
  {
    label: 'Dashboard',
    link: '/dashboard', // Specify the route or URL for this tab
    component: <Dashboard/>, 
  },
  {
      label: 'Invoice',
      link: '/home', // Specify the route or URL for this tab
      component: <InvoiceList/>, // Import and use the appropriate component for this tab
    },
    {
        label: 'Home',
        link: '/home', // Specify the route or URL for this tab
        component: <HomeContent/>, // Import and use the appropriate component for this tab
      },
      {
          label: 'Home',
          link: '/home', // Specify the route or URL for this tab
          component: <HomeContent/>, // Import and use the appropriate component for this tab
        }
    
  ];

  export default tabsConfig;