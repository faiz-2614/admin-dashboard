import {
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { searchfilterStyle } from "./invoiceStyles";

const aa = [1, 2, 3, 4, 5];

function SearchFilter({keys}) {

    const [menuItems,setMenuItems] = React.useState([])

    React.useEffect(() => {
        setMenuItems(keys)
        console.log(menuItems)
    }, [])
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1rem",
      }}
    >
      <Grid container spacing={1} item xs={12}>
        {aa.map((val, index) => {
          return (
            <React.Fragment key={val}>
              <Grid item xs={6}>
                {/* <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                  style={{
                    width: "100%",
                    height: "72%",
                    backgroundColor: "#427D9D",
                    color: "white",
                  }}
                  // sx={filterStyle}
                >
                {menuItems?.map((column)=>{
                    return (
                        <MenuItem value={column.field}>{column.headerName}</MenuItem>
                    )
                })}
                </Select> */}
              </Grid>
              <Grid container item xs={6}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={searchfilterStyle}
                  style={{
                    width: "100%",
                    height: "75%",
                    color: "white",
                  }}
                />
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default SearchFilter;
