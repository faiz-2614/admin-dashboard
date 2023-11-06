import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="30px">
      
      <Typography variant="h5" color={"green"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
