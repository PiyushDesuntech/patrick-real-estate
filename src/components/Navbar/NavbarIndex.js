"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Dialog,
  DialogContent,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  useMediaQuery,
  useTheme,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Icon } from "@iconify/react";
import { useRouter, usePathname } from "next/navigation";
import AuthDialog from "./AuthDialog";

const NavbarIndex = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isAgentLoginView, setIsAgentLoginView] = useState(false);
  const [isAgentRegisterView, setIsAgentRegisterView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const staticCredentials = {
    username: "testuser",
    password: "password123",
    token: "staticToken123",
  };

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
  };

  const switchView = () => {
    setIsLoginView(!isLoginView);
    setIsAgentLoginView(false)
  };

  const switchToAgentLogin = () => {
    setIsLoginView(false);
    setIsAgentLoginView(true);
  };

  const switchToAgentRegister = () => {
    // setIsLoginView(false);
    // switchView(false)
    setIsAgentLoginView(false);
    setIsAgentRegisterView(true)
  } 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const navItems = [
    { label: "Rent", path: "/rent" },
    { label: "Buy", path: "/buy" },
    { label: "Sell", path: "/sell" },
    { label: "Students", path: "#" },
    { label: "Market Insight", path: "/insights" },
    { label: "Resources", path: "#" },
    { label: "About", path: "/about-us" },
  ];

  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };

  const showTransparent = ["/", "/buy", "/rent"].includes(pathname);
  const handleLogoClick = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: showTransparent? "transparent": "#fff", boxShadow: "none", color: showTransparent? "#fff": "#000" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { lg: 8 },
            pt: 2,
            zIndex: 1100,
          }}
        >
          <Box sx={{ width: { xs: "200px", md: "100px", lg: "269px" } }}>
            <Image
            onClick={handleLogoClick} 
              src={showTransparent? "/Images/logo.svg": "/Images/logo2.svg"}
              alt="Colonial Realty Associates"
              layout="responsive"
              width={269}
              height={66}
              style={{cursor: "pointer"}}
            />
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: 0, lg: 0 },
                alignItems: "center",
                px: 2,
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)} // Navigate on click
                  sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "flex-end",
                    fontWeight: 500,
                    width: "fit-contents",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label} <KeyboardArrowDownIcon fontSize="small" />
                </Button>
              ))}
              <Divider
                sx={{
                  borderColor: "#B1B1B1",
                  borderWidth: "1px",
                  height: "27px",
                }}
              />
              <Button
                // endIcon={<KeyboardArrowDownIcon/>}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "flex-end",
                  fontWeight: 500,
                }}
                onClick={handleMenuOpen}
              >
                <PersonOutlineOutlinedIcon sx={{ mx: 1 }} />
                Landlords
                <KeyboardArrowDownIcon fontSize="small" />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    marginTop: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  Landlord Resources
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Landlord Login</MenuItem>
              </Menu>
            </Box>

            <Button
              variant="contained"
              onClick={handleDialogToggle}
              color="secondary"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "#fff",
                },
                color: "#000",
                borderRadius: "30px",
                textTransform: "none",
                px: { xs: 2, sm: 2, md: 2, lg: "25px" },
                py: "10px",
                // mr: 3,
                width: "fit-content",
                whiteSpace: "nowrap",
                fontSize: "16px",
                fontWeight: 500,
                height: "50px",
              }}
            >
              Login/Register
            </Button>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                button // Makes the ListItem clickable
                onClick={() => handleNavigation(item.path)} // Navigate on click
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <ListItemText primary="Landlord" />
            </ListItem>
          </List>
          <Button
            variant="contained"
            // color="secondary"
            onClick={handleDialogToggle}
            sx={{
              display: "flex",
              backgroundColor: "#E0D8C3",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#4D4D4D",
              borderRadius: "30px",
              textTransform: "none",
              px: { xs: 2, sm: 2, md: 5, lg: "40px" },
              py: "10px",
              m: 2,
            }}
          >
            Login/Register
          </Button>
        </Box>
      </Drawer>

      {/* Login/Register Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogToggle}
        maxWidth={false}
        fullWidth
        fullScreen={isMobile}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "1012px", 
            width: "100%",
            overflow: "hidden",
          },
        }}
      >
         <AuthDialog
      handleDialogToggle={handleDialogToggle}
      isLoginView={isLoginView}
      isMobile={isMobile}
      switchView={switchView}
      switchToAgentLogin={switchToAgentLogin}
      isAgentLoginView={isAgentLoginView}
      switchToAgentRegister={switchToAgentRegister}
      isAgentRegisterView={isAgentRegisterView}
      
    />

      </Dialog>
    </>
  );
};

export default NavbarIndex;
