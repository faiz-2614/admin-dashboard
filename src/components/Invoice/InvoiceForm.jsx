import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    clientName: "",
    invoiceDate: "",
    dueDate: "",
    amount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Invoice data submitted:", invoiceData);
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={12}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppBar position="static">
            <Toolbar>
              <Grid container>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <Grid item>
                    <Typography variant="h6">Invoice Creation</Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  spacing={3}
                >
                  <Grid item style={{ marginRight: "2%" }}>
                    <Button
                      style={{ border: "0.1rem solid white" }}
                      variant="contained"
                    >
                      Generate Invoice PDF
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      style={{ border: "0.1rem solid white" }}
                      variant="contained"
                      onClick={()=> {navigate("/")}}
                    >
                      Back To Invoice Tab
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item >
        <Grid container justifyContent="center" alignItems="center">
  <Grid item xs={12} sm={8} md={6} lg={4}>
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Create New Invoice
      </Typography>
      <div>
        <TextField
          label="Invoice Number"
          variant="outlined"
          fullWidth
          name="invoiceNumber"
          value={invoiceData.invoiceNumber}
          onChange={handleChange}
        />
        <TextField
          label="Client Name"
          variant="outlined"
          fullWidth
          name="clientName"
          value={invoiceData.clientName}
          onChange={handleChange}
        />
        <TextField
          label="Invoice Date"
          variant="outlined"
          type="date"
          fullWidth
          name="invoiceDate"
          value={invoiceData.invoiceDate}
          onChange={handleChange}
        />
        <TextField
          label="Due Date"
          variant="outlined"
          type="date"
          fullWidth
          name="dueDate"
          value={invoiceData.dueDate}
          onChange={handleChange}
        />
        <TextField
          label="Amount"
          variant="outlined"
          type="number"
          fullWidth
          name="amount"
          value={invoiceData.amount}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Invoice
        </Button>
      </div>
    </Paper>
  </Grid>
</Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default InvoiceForm;

