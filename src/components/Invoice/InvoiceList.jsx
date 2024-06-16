import React, { useState } from "react";
import { DataGrid, GridSearchIcon } from "@mui/x-data-grid";
import { Button, Grid, InputAdornment, Select, TextField } from "@mui/material";
import { datagridStyles, searchStyle } from "./invoiceStyles";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInvoice } from "../../reducers/invoiceSlice";
import InvoiceSkeleton from "./InvoiceSkeleton";
import { MenuItem } from "react-pro-sidebar";
import SearchFilter from "./SearchFilter";
import {
  setBasicConfigs,
  setInvoiceFields,
} from "../../reducers/basicConfigSlice";

// const columns = [
//   { field: "documentNumber", headerName: "Invoice Number", width: 150 },
//   { field: "companyCode", headerName: "companyCode", width: 120 },
//   { field: "fkCustomerId", headerName: "fkCustomerId", width: 120 },
//   { field: "isOpen", headerName: "isOpen", width: 200 },
//   { field: "isDeleted", headerName: "isDeleted", width: 120 },
//   { field: "invoiceAmount", headerName: "invoiceAmount ", type: "number", width: 120 },
// ];

const getRows = (invoicesData) => {
  return invoicesData?.map((invoice, index) => ({
    id: index + 1,
    ...invoice,
    // client: invoice.client.name, // Access the client name directly for simplicity
  }));
};

const InvoiceList = () => {
  const [text, settext] = useState("");
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState({
    invoiceNumber: "",
    date: "",
    dueDate: "",
    client: "",
    subtotal: "",
    taxAmount: "",
    total: "",
  });
  const theme = useTheme();
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state?.invoice?.rows);
  const fields = useSelector((state) => state?.basicConfig?.invoiceFields);
  console.log(fields);
  const navigate = useNavigate();

  const generateColumns = (fields) => {
    return fields?.map((field) => ({
      field: field.fieldName,
      headerName: field.displayName,
      width: 100,
    }));
  };

  let handleChange = (e) => {
    settext(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8082/getAllInvoice")
      .then((response) => response.json())
      .then((data) => dispatch(setInvoice(data)))
      .catch((error) => console.error(error));

    if (fields.length === 0) {
      fetch("http://localhost:8082/getFields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId: 1,
          screenId: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => dispatch(setInvoiceFields(data)))
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    setColumns(generateColumns(fields));
  }, [fields]);
  console.log(invoiceData && fields != undefined);
  return (
    <div>
      <Grid
        container
        spacing={3}
        xs={12}
        sm={12}
        md={12}
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Button
              style={{ width: "80%", margin: "1%" }}
              variant="contained"
              onClick={() => navigate("newInvoice")}
            >
              Create Invoice
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button style={{ width: "80%", margin: "1%" }} variant="contained">
              Edit Invoice
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button style={{ width: "80%", margin: "1%" }} variant="contained">
              Delete Invoice
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {invoiceData &&  fields != undefined? (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Grid container style={{ height: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              style={{
                width: "70%",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <DataGrid
                rows={getRows(invoiceData)}
                columns={generateColumns(fields)}
                pageSize={100}
                rowHeight={25}
                // rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
                sx={datagridStyles}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ width: "30%" }}>
              <div
                style={{
                  height: "60vh",
                  width: "100%",
                  backgroundColor: theme.palette.primary.dark,
                  marginLeft: "2%",
                  borderRadius: "4%",
                }}
              >
                <SearchFilter keys={columns} values={search} />
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <InvoiceSkeleton />
      )}
    </div>
  );
};

export default InvoiceList;
