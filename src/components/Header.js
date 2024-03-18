import React, { useState } from "react";
import { Menu, Row, Col, Modal } from "antd";
import Login from "./Login";
import SignUp from "./SignUp";
import SignIn from "./Login";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "../App.css";
const { Item } = Menu;

const Header = () => {
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);

  const handleSignInClick = () => {
    setSignInModalVisible(true);
  };

  const handleSignUpClick = () => {
    setSignUpModalVisible(true);
  };

  const handleSignInModalCancel = () => {
    setSignInModalVisible(false);
  };

  const handleSignUpModalCancel = () => {
    setSignUpModalVisible(false);
  };

  const styles = {
    signInButton: {
      order: 1,
    },
    signUpButton: {
      order: 2,
    },
  };

  return (
    <div clasName="box">
      <Box clasName="box">
        <AppBar position="static" clasName="box">
          <Toolbar clasName="box">
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/category">
              Category
            </Button>
            <Button color="inherit" component={Link} to="/sell">
              Sell
            </Button>
            <Button color="inherit" component={Link} to="/account">
              Account
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#FF4949",
                ...styles.signInButton,
                marginLeft: "1000px",
              }}
              onClick={handleSignInClick}
            >
              SignIn
            </Button>
            <Button
              type="default"
              style={{
                backgroundColor: "#FF4949",
                color: "#FFFFFF",
                marginLeft: "10px",
                ...styles.signUpButton,
              }}
              onClick={handleSignUpClick}
            >
              SignUp
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        title="Hi! Welcome Back"
        visible={signInModalVisible}
        onCancel={handleSignInModalCancel}
        footer={null}
      >
        <Login />
      </Modal>
      <Modal
        title="Welcome!!!"
        visible={signUpModalVisible}
        onCancel={handleSignUpModalCancel}
        footer={null}
      >
        <SignUp />
      </Modal>
    </div>
  );
};

export default Header;
