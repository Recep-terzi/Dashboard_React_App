import React, { useState } from "react";
import "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthcontext } from "../../hooks/useAuthContext";

const pages = [];


const Navbar = () => {
  
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user } = useAuthcontext();

  
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { logout } = useLogout();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DashboardIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: "red",
                transition: "0.5s",
                textDecoration: "none",
              },
            }}
          >
            {" "}
            Pyson Dashboard
          </Typography>
          
          <DashboardIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize:{xs:"18px"},
              "&:hover": {
                color: "red",
                transition: "0.5s",
                textDecoration: "none",
              },
            }}
          >
            Pyson Dashboard
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            centered
          >
            {pages.map((page) => (
              <Button
                key={page}
                href="/dashboard"
                
                sx={{
                  color: "white",
                  display: "block",
                  "&:first-of-type": { color: "yellow" },
                  "&:hover": {
                    color: "red",
                    borderBottom: "1px solid black",
                    transition: "0.5s",
                  },
                }}
                className="buttonhover"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, mr: 10 }}
            centered
          ></Box>
          <Typography variant="h6" color="white" sx={{ mr: 6,display: { xs: "none",md: "flex" }}}>
            {" "}
            Hoşgeldiniz {!user && <>Lütfen Oturum Açınız</>} {user && <>{user.displayName}</>}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!user && (
                <Link to="/signin">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"  sx={{textDecoration:"none",color:"black"}}>Sign In</Typography>
                  </MenuItem>
                </Link>
              )}
              {!user && (
                <Link to="/signup" >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" sx={{textDecoration:"none",color:"black"}}>Register</Typography>
                  </MenuItem>
                </Link>
              )}
              {user && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout} >
                    Logout
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
