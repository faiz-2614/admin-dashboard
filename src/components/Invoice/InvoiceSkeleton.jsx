import { Grid, Skeleton } from '@mui/material'
import React from 'react'

function InvoiceSkeleton() {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={12} sm={12} md={9} style={{ width: "70%" }}>
              <Skeleton
                style={{ color: "white" }}
                variant="rectangular"
                width={1050}
                height={425}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ width: "30%" }}>
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
                  <Skeleton
                    style={{ color: "white" }}
                    variant="rectangular"
                    width={900}
                    height={425}
                  ></Skeleton>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default InvoiceSkeleton