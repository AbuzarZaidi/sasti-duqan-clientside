import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,price,singleProductTotal,productQuantity) {
  return {name,price,singleProductTotal,productQuantity};
}


export default function ProductsGrid({product}) {
  return (
    <TableContainer component={Paper}sx={{marginTop:3}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Single Product Total</TableCell>
            <TableCell align="right">Product Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((prod) => (
            <TableRow
              key={prod.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {prod.name}
              </TableCell>
              <TableCell align="right">{prod.price}</TableCell>
              <TableCell align="right">{prod.singleProductTotal}</TableCell>
              <TableCell align="right">{prod.productQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
