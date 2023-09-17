import LoginForm from "../components/Login";
import HomeContent from "../pages/HomeContent";

const tabsConfig = [
    {
      label: 'Home',
      link: '/home', // Specify the route or URL for this tab
      component: HomeContent, // Import and use the appropriate component for this tab
      childTabs : {
        label: 'Invoice',
        link: '/home/login', // Specify the route or URL for this tab
      component: LoginForm, 
      }
    }
  ];

  export default tabsConfig;