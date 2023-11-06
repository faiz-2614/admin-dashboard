import React, { useState } from "react";
import { DataGrid, GridSearchIcon } from "@mui/x-data-grid";
import invoicesData from "./invoiceData";
import { Button, Grid, InputAdornment, Skeleton, TextField } from "@mui/material";
import { datagridStyles, searchStyle } from "./invoiceStyles";
import { useTheme } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInvoice } from "../../reducers/invoiceSlice";


const columns = [
  { field: "invoiceNumber", headerName: "Invoice Number", width: 150 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "dueDate", headerName: "Due Date", width: 120 },
  { field: "client", headerName: "Client Name", width: 200 },
  { field: "subtotal", headerName: "Subtotal", type: "number", width: 120 },
  { field: "taxAmount", headerName: "Tax Amount", type: "number", width: 120 },
  { field: "total", headerName: "Total", type: "number", width: 120 },
];

const rows = invoicesData.map((invoice, index) => ({
  id: index + 1, // Assuming each invoice has a unique identifier
  ...invoice,
  client: invoice.client.name, // Access the client name directly for simplicity
}));

const InvoiceList = () => {
  const [text, settext] = useState("");
  const [rowData, setRowData] = useState({}); 
  const theme = useTheme();
  const dispatch = useDispatch();
  const invoiceData = useSelector(state => state?.invoice?.rows?.rows)
  console.log("hei",invoiceData)

  const navigate = useNavigate();
  let handleChange = (e) => {
    settext(e.target.value);
  };



  useEffect(() => {
    fetch('http://localhost:5000/api/getAllInvoice')
      .then((response) => response.json())
      .then((data) => dispatch(setInvoice(data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Grid container spacing={3} xs={12}  sm={12} md={12} style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2%",
        }}>
        <Grid item xs={12} sm={12} md={6} style={{ width: "100%",display:"flex", alignItems:"center", justifyContent:"center" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GridSearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
            variant="outlined"
            value={text}
            size="small"
            autoComplete="off"
            onChange={handleChange}
            sx={searchStyle}
          />
        </Grid>
        <Grid container item xs={12} sm={12} md={6} style={{display:"flex",alignItems:"center", justifyContent:"space-around"}}>
          <Grid item xs={12} sm={6} md={4}>
            <Button style={{width:"80%", margin:"1%"}} variant="contained" onClick={()=>navigate('newInvoice')}>Create Invoice</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Button  style={{width:"80%", margin:"1%"}} variant="contained">Edit Invoice</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button  style={{width:"80%", margin:"1%"}} variant="contained">Delete Invoice</Button>
          </Grid>
        </Grid>
      </Grid>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2%",
        }}
      >
       
        <div
          style={{
            width: "34%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            
          </Grid>
        </div>
      </div> */}
      {invoiceData ? <div style={{ display: "flex", flexDirection: "row" , width:"100%"}}>
        <Grid container style={{ height: "100%"}}>
          <Grid item  xs={12} sm={12} md={9} style={{width:"70%"}}>
      
          <DataGrid
            rows={invoiceData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            sx={datagridStyles}
          />
  
          </Grid>
          <Grid item  xs={12} sm={12} md={3} style={{width:"30%"}}>
          <div
          style={{
            height: "60vh",
            width: "100%",
            backgroundColor: theme.palette.primary.dark,
            marginLeft: "2%",
            borderRadius: "4%",
          }}
        >
          <Grid container>

            </Grid>
        </div>
          </Grid>
        </Grid>
        
       
      </div> : 
      <div style={{ display: "flex", flexDirection: "row" , width:"100%"}}>
      <Grid container style={{ height: "100%"}}>
        <Grid item  xs={12} sm={12} md={9} style={{width:"70%"}}>
    
        <Skeleton style={{color:"white"}} variant="rectangular" width={1050} height={425}/>

        </Grid>
        <Grid item  xs={12} sm={12} md={3} style={{width:"30%"}}>
        <div
        style={{
          height: "60vh",
          width: "100%",
          // backgroundColor: theme.palette.primary.dark,
          marginLeft: "2%",
          borderRadius: "4%",
        }}
      >
        <Grid container>
        <Skeleton style={{color:"white"}} variant="rectangular" width={900} height={425}></Skeleton>
          </Grid>
      </div>
        </Grid>
      </Grid>
      
     
    </div> }
      
    </div>
  );
};

export default InvoiceList;
