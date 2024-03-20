import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
  AlertTitle,
  Typography,
  Card,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Image = styled("img")({
  maxWidth: "100%",
  maxHeight: "250px",
});

const Wrap = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const AddComponent = () => {
  const baseUrl = "http://localhost:5000/api/accounts";

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    avatar: Yup.string()
      .url("Image must be a valid URL")
      .required("Image is required"),
    phone: Yup.number()
      .min(10, "Name must be at least 10 characters")
      .required("Phone is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    address: Yup.string()
      .min(2, "Address must be at least 2 characters")
      .required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      avatar: "",
      email: "",
      phone: "",
      address: "",
      role: "",
    },
    validationSchema,
    onSubmit: (values) => {
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Card variant="outlined" sx={{ p: 5, my: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h4">Add Account Form:</Typography>
            <TextField
              fullWidth
              id="avatar"
              name="avatar"
              label="Avatar URL"
              value={formik.values.avatar}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.avatar && Boolean(formik.errors.avatar)}
              helperText={formik.touched.avatar && formik.errors.avatar}
              sx={{ pb: 2 }}
              InputLabelProps={{
                sx: { fontSize: "1rem", pb: 1 },
              }}
            />
            {formik.values.avatar && (
              <Wrap>
                <Image src={formik.values.avatar} alt="User's image" />
              </Wrap>
            )}
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              sx={{ pb: 2 }}
              InputLabelProps={{
                sx: { fontSize: "1rem", pb: 1 },
              }}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ pb: 2 }}
              InputLabelProps={{
                sx: { fontSize: "1rem", pb: 1 },
              }}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              sx={{ pb: 2 }}
              InputLabelProps={{
                sx: { fontSize: "1rem", pb: 1 },
              }}
            />

            <FormControl fullWidth sx={{ pb: 2 }}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.role && Boolean(formik.errors.role)}
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              sx={{ pb: 2 }}
              InputLabelProps={{
                sx: { fontSize: "1rem", pb: 1 },
              }}
            />

            <Typography align="right">
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Typography>
          </form>
        </Card>
        <IconButton aria-label="go back">
          <Link to="/account">
            <Button variant="contained">Go back</Button>
          </Link>
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Alert severity="success">
                <AlertTitle>Adding successful!</AlertTitle>
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>
              <Link to="/account" style={{ textDecoration: "none" }}>
                OK
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default AddComponent;
