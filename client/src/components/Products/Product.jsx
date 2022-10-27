import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";


function Products() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [ `&.${tableCellClasses.head}` ]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [ `&.${tableCellClasses.body}` ]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [ product, setProduct ] = useState([])
  const url = 'http://localhost:3000/products'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data)
      })
  }, [])
  
  function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`,
    {
      method: 'DELETE'
    }
    )
      .then((r) => r.json())
      .then(() => {
        const goThru = product.filter(
          (product) => product.id !== id
        );
        setProduct(goThru)
    })
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Category id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            
          </TableBody>
        </Table>
        //{" "}
      </TableContainer>
      <Button
        type="button"
        onClick={() => {
          deleteProduct(product.id);
        }}
        variant="contained"
        color="secondary"
      >
        Text
      </Button>
    </>
  );
}

export default Products;
