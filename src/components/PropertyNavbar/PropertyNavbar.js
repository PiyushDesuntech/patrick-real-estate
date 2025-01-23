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

const PropertyNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

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
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const navItems = [
    "Rent",
    "Buy",
    "Sell",
    "Students",
    "Market Insight",
    "Resources",
    "About",
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "#fff", boxShadow: "none", color: "#000" }}
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
              src="/Images/logo2.svg"
              alt="Colonial Realty Associates"
              layout="responsive"
              width={269}
              height={66}
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
                  // endIcon={}
                  key={index}
                  color="inherit"
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
                  {item} <KeyboardArrowDownIcon fontSize="small" />
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
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
            maxWidth: "1012px", // Custom max width
            width: "100%", // Ensures proper responsiveness
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ overflow: { xs: "scroll", md: "hidden" } }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              onClick={handleDialogToggle}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
            <Box
              style={{
                display: isMobile ? "none" : "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                maxWidth: "438.65px",
                padding: "1rem",
              }}
            >
              <Image
                src="/Images/logIn.svg"
                alt="Colonial Realty Associates"
                layout="responsive"
                width={200}
                height={300}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box flex={1} p={3}>
              <Typography
                sx={{ fontWeight: 700, fontSize: "31.88px", color: "#484848" }}
                gutterBottom
              >
                {isLoginView ? "Login" : "Register"}
              </Typography>
              {isLoginView ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    fullWidth
                    sx={{
                      display: "flex",
                      gap: { xs: 1, md: "98px" },
                      justifyContent: "flex-start",
                      color: "#484848",
                      border: "1px solid #606060",
                      borderRadius: "8.63px",
                      textTransform: "none",
                      height: "60px",
                      maxWidth: "455.92px",
                      fontSize: "17.27px",
                      fontWeight: 500,
                      mb: "26.06px",
                    }}
                  >
                    <Image
                      src="/Images/facebook.svg"
                      alt="facebood"
                      // layout="responsive"
                      width={39.99}
                      height={39.99}
                      style={{ objectFit: "contain" }}
                    />
                    Login with Facebook
                  </Button>
                  <Button
                    fullWidth
                    sx={{
                      display: "flex",
                      gap: { xs: 1, md: "117px" },
                      justifyContent: "flex-start",
                      color: "#484848",
                      border: "1px solid #606060",
                      borderRadius: "8.63px",
                      textTransform: "none",
                      height: "60px",
                      maxWidth: "455.92px",
                      fontSize: "17.27px",
                      fontWeight: 500,
                    }}
                  >
                    <Image
                      src="/Images/google.svg"
                      alt="facebood"
                      // layout="responsive"
                      width={27.63}
                      height={27.63}
                      style={{ objectFit: "contain", marginLeft: "5px" }}
                    />
                    Login with Google
                  </Button>
                  <Typography textAlign="center" my={2}>
                    Or
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter username or email"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                     "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter Password"
                    type="password"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Image
                            src="/Images/lock.svg"
                            alt="facebood"
                            // layout="responsive"
                            width={21.18}
                            height={21.18}
                            style={{ objectFit: "contain" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                     "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1,
                      gap: 5,
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span>
                          I agree to{" "}
                          <a
                            href="/"
                            target="_blank"
                            style={{ color: "#A0A0A0" }}
                          >
                            Terms & Conditions
                          </a>
                        </span>
                      }
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          color: "#A0A0A0",
                          fontSize: "16px",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#A0A0A0",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      Lost Your Password?
                    </Typography>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      display: "flex",
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#3E4C66",
                        color: "#fff",
                        boxShadow: "none",
                      },
                      color: "#4D4D4D",
                      borderRadius: "8.63px",
                      textTransform: "none",
                      px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                      mt: 2,
                      height: "51.81px",
                      boxShadow: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      maxWidth: "455.92px",
                    }}
                  >
                    Login
                  </Button>
                  <Typography
                    mt={2}
                    textAlign="center"
                    sx={{
                      color: "#A0A0A0",
                      fontWeight: 400,
                      fontSize: "17.27px",
                    }}
                  >
                    Don't you have an account?{" "}
                    <Link
                      onClick={switchView}
                      sx={{
                        cursor: "pointer",
                        color: "#A0A0A0",
                        // textDecoration: "underline",
                        // textDecorationColor: "#A0A0A0",
                        fontWeight: 700,
                        fontSize: "17.27px",
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </Link>
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Name"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon
                            icon="material-symbols:mail-outline"
                            style={{ fontSize: "24px" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter Password"
                    type="password"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Image
                            src="/Images/lock.svg"
                            alt="facebood"
                            // layout="responsive"
                            width={21.18}
                            height={21.18}
                            style={{ objectFit: "contain" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                     "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Re-enter Password"
                    type="password"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Image
                            src="/Images/lock.svg"
                            alt="facebood"
                            // layout="responsive"
                            width={21.18}
                            height={21.18}
                            style={{ objectFit: "contain" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#f9f9f9",
                      border: "1px solid #ddd",
                      borderRadius: "1.73px",
                      padding: "8px 16px",
                      maxWidth: "411.88px",
                      // fullWidth
                      width: "100%",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    {/* Checkbox and Text */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox />
                      <Typography sx={{ fontSize: "14px", color: "#333" }}>
                        I’m not a robot
                      </Typography>
                    </Box>

                    {/* reCAPTCHA Logo */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/Images/recaptcha.svg" // Replace with the reCAPTCHA logo path in your public folder
                        alt="reCAPTCHA"
                        width={30}
                        height={30}
                      />
                      <Typography
                        sx={{
                          fontSize: "12.09px",
                          color: "#474444",
                          fontWeight: 500,
                        }}
                      >
                        reCAPTCHA
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "10.36px",
                          color: "#676767",
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{ fontSize: "10.36px", color: "#676767" }}
                        >
                          Privacy
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ fontSize: "10.36px", color: "#676767" }}
                        >
                          Terms
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      display: "flex",
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#3E4C66",
                        color: "#fff",
                        boxShadow: "none",
                      },
                      color: "#4D4D4D",
                      borderRadius: "8.63px",
                      textTransform: "none",
                      px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                      mt: 2,
                      height: "51.81px",
                      boxShadow: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      maxWidth: "455.92px",
                    }}
                  >
                    Register
                  </Button>
                  <Typography
                    mt={2}
                    textAlign="center"
                    sx={{
                      color: "#A0A0A0",
                      fontWeight: 400,
                      fontSize: "17.27px",
                    }}
                  >
                    Already have an account?{" "}
                    <Link
                      onClick={switchView}
                      sx={{
                        cursor: "pointer",
                        color: "#A0A0A0",
                        // textDecoration: "underline",
                        // textDecorationColor: "#A0A0A0",
                        fontWeight: 700,
                        fontSize: "17.27px",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyNavbar;
