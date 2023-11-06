import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function OutlinedCard({type, amount}) {
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined">
      <CardContent>
      <Typography sx={{ fontSize: "1rem" }} color="text.secondary" gutterBottom>
        {type}
      </Typography>
     
      <Typography variant="body2">
         {amount}  
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Check Invoice</Button>
    </CardActions>
      </Card>
    </Box>
  );
}
