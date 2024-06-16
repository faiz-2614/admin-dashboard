import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';


export const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];


export default function TransactionCard({type, amount}) {
  const theme = useTheme();
  return (
    <>
     <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.background.paper}`}
            colors={theme.palette.secondary.light}
            backgroundColor={theme.palette.primary.dark}
            p="15px"
          >
            <Typography color={theme.palette.background.paper} variant="h5" fontWeight="600">
              Recent Invoice Actions
            </Typography>
          </Box>
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.main}
          overflow="auto"
          height = "40vh"
        >
         
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.background.paper}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={theme.palette.background.paper}
                  variant="h5"
                  fontWeight="400"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={theme.palette.background.default}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={theme.palette.background.default}>{transaction.date}</Box>
              <Box
                backgroundColor={theme.palette.background.paper}
                p="5px 10px"
                width={"5rem"}
                borderRadius="4px"
                display={"flex"}
                justifyContent="center"
                alignItems="center"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
    
    </>
    
  );
}
