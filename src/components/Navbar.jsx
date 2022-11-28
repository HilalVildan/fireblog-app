import {
  Box,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  localStorage.setItem("currentUser", currentUser.email);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <Box
              component="img"
              href="/login"
              sx={{
                // height: 40,
                width: 70,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="#"
              src="https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_960_720.png"
            ></Box>
          </a>

          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              textDecoration: "none",
              fontSize: "2rem",

              color: "inherit",
              fontFamily: "Girassol",
            }}
          >
            {"----<Hilal/>Blog----"}
          </Typography>

          <div>
            <IconButton
              sx={{
                fontSize: "30px",
              }}
              fontSize="30px"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            {currentUser ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/newBlog");
                    handleClose();
                  }}
                >
                  New
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    handleClose();
                    logOut();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {" "}
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    handleClose();
                  }}
                >
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/register");
                    handleClose();
                  }}
                >
                  {" "}
                  Register
                </MenuItem>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
