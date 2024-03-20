import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Modal } from "antd";
import Login from "./Login";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';
import { Notifications as NotificationsIcon, Logout as LogoutIcon, Settings as SettingsIcon, Person as PersonIcon } from '@mui/icons-material';

const { Item } = Menu;

const Header = () => {
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const styles = {
    signInButton: {
      order: 1,
    },
    signUpButton: {
      order: 2,
    },
    userButton: {
      order: 3,
      marginLeft: "10px",
    },
    box: {
      color: "#FF4949",
    },
    notificationIcon: {
      marginRight: "10px",
    },
  };

  return (
    <div className="box">
      <Box className="box" sx={styles.box}>
        <AppBar position="static" className="box">
          <Toolbar className="box">
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
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>

              {!user ? (
                <>
                  <Button color="inherit" onClick={handleSignInClick}>
                    SignIn
                  </Button>
                  <Button color="inherit" onClick={handleSignUpClick}>
                    SignUp
                  </Button>
                </>
              ) : (
                <>
                  <MuiMenu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleUserMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'user-menu-button',
                    }}
                  >
                    <MenuItem onClick={handleUserMenuClose}>
                      <PersonIcon />
                      ({user.email})
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <LogoutIcon />
                      Logout
                    </MenuItem>
                    <MenuItem onClick={handleUserMenuClose}>
                      <SettingsIcon />
                      Settings
                    </MenuItem>
                  </MuiMenu>
                  <Button onClick={handleUserMenuClick} color="inherit">
                    {user.email[0].toUpperCase()}
                  </Button>
                </>
              )}
            </Box>
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
      </Modal>
    </div>
  );
};

export default Header;