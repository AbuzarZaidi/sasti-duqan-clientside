import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function createData(orderNumber, name, total, qty) {
    return { orderNumber, name, total, qty };
  }
  
const NewOrderList = ({rows}) => {
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow sx={{backgroundColor:"#FEFDCD"}}>
                <TableCell> <Box sx={{display:"flex"}}>
              <img src="/img/newOrderLList.png" alt="" /> <Typography sx={{marginLeft:2,color:"#898541",fontWeight: 'bold',fontSize:"16px"}}>New Order List</Typography>
            </Box></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                </TableRow>
              <TableRow>
                <TableCell>Order No</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Total</TableCell>
                <TableCell align="left">Qty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows&&rows.map((row) => (
                <TableRow
                  key={row.trackingId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.trackingId}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.total}</TableCell>
                  <TableCell align="left">{row.quantity}</TableCell>
               
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default NewOrderList