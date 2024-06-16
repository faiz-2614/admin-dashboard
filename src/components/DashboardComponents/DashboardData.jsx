import React from "react";
import OutlinedCard from "../Card";
import { Grid } from "@mui/material";
import TransactionCard from "./TransactionCard";
import { BarChart } from "../Charts/BarChart";
import { useTheme } from "@emotion/react";

//what are the thimg which we need to show in invoice dashboard
//1. total open amount
//2. total closed amount
//3. total revenue generated
//4. transaction card
//5. invoice table

//anythig else
//1. add invoice button
//2. search bar
//3. filter button

function DashboardData() {
  const theme = useTheme();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard type={"Total Open Amount"} amount={14038} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard type={"Total Closed Amount"} amount={140} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard type={"Total Revemue Generated"} amount={2346} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ height: "100%" }}>
          <TransactionCard />
        </Grid>
      
        <Grid item xs={12} sm={12} md={6}  >
          <BarChart/>
        </Grid>
        
      </Grid>

       
    </div>
  );
}

export default DashboardData;
