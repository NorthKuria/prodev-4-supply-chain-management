import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductsForm from "./ProductsForm";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,

  },
}));

export default function Product() {

   const [product, setProduct]= React.useState([])
  
   useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then(data =>setProduct(data));
  }, []); 

  function handleDelete(id) {

    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        // deleteEvent(id)
        const deletion = product.filter((item) => item.id !== id);
        setProduct(deletion);
      });
  }



  // function deleteEvent(id) {
  //   const updatedEvents = category.filter((one) => one.id !== id);
  //   setCategory(updatedEvents);
  // }

  return (
    
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <ProductsForm />
    <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
               
                  
      <Table sx={{ minWidth: 1000, ml:10 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            {/* <StyledTableCell >Category</StyledTableCell> */}
            <StyledTableCell align="right" >Delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>


        {product.map((row) => 
        
        (
            <StyledTableRow key={row.id} >
              <StyledTableCell component="th" scope="row">
              {row.name}
              </StyledTableCell>
              {/* <StyledTableCell component="th" scope="row">
              {row.category_id}
              </StyledTableCell> */}
             <StyledTableCell align="right"><Button onClick={()=>handleDelete(row.id)} variant="contained" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
</StyledTableCell>
              
            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>     
              </Grid>
              </Grid>
    
    </Container>
  )
}