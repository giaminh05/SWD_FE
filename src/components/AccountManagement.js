import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import TableContainer from "@mui/material/TableContainer";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const TableContainerStyled = styled(TableContainer)`
  & .MuiTableCell-head {
    background-color: #f5f5f5;
    color: #333;
  }

  & .MuiTableCell-body {
    background-color: #fff;
    color: #333;
  }
`;

const AccountManagement = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const baseUrl =
    "https://65e0228bd3db23f762485c66.mockapi.io/studentManagement";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [baseUrl]);

  const handleAddStudent = () => {
    navigate("/add");
  };
  const handleEditStudent = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const handleDeleteStudent = async () => {
    try {
      await fetch(`${baseUrl}/${deleteId}`, {
        method: "DELETE",
      });
      setOpenDialog(false);
      const newData = data.filter((item) => item.id !== deleteId);
      setData(newData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDeleteId(null);
  };

  return (
    <Container sx={{ my: 5, minHeight: "75vh" }}>
      <TableContainerStyled component={Paper}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleAddStudent}
          >
            Add New Account
          </Button>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date of birth</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Class</TableCell>
              <TableCell align="left">Feedback</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <Avatar alt={row.name} src={row.image} />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.dateofbirth}</TableCell>
                <TableCell align="left">
                  {row.gender ? "Male" : "Female"}
                </TableCell>
                <TableCell align="left">{row.class}</TableCell>
                <TableCell align="left">{row.feedback}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleEditStudent(row.id)}>
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDeleteConfirmation(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this student?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteStudent} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AccountManagement;
