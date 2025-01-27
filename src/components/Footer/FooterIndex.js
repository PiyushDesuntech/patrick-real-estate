import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Link,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TwitterIcon from "@mui/icons-material/Twitter";
import NorthIcon from "@mui/icons-material/North";
import Image from "next/image";

const FooterIndex = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#394460",
          color: "white",
          py: 2,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { lg: 8 }, pb: 6 }}>
          <Grid container spacing={4}>
            {/* Logo and About */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Box sx={{ py: { md: 3 } }}>
                <Image
                  src="/Images/logo.svg"
                  alt="Colonial Realty Associates"
                  width={200}
                  height={100}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "26px",
                  }}
                >
                  Sed aliquet dui ut pellentesque semper. Nulla facilisi. Duis
                  ac odio tortor. Nunc ullamcorper, justo a pretium finibus,
                  lacus lectus dignissim lorem, nec congue nunc purus sed dolor.
                </Typography>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box
                sx={{
                  px: { md: 7 },
                  mt: 5,
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, mb: 4, fontSize: "22px" }}
                >
                  Quick Links
                </Typography>
                <Typography
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {color: "#E8E1C4"},
                    cursor: "pointer"
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {color: "#E8E1C4"},
                    cursor: "pointer"
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Typography
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {color: "#E8E1C4"},
                    cursor: "pointer"
                  }}
                >
                  User's Guide
                </Typography>
                <Typography
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {color: "#E8E1C4"},
                    cursor: "pointer"
                  }}
                >
                  Support Center
                </Typography>
                <Typography
                   sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {color: "#E8E1C4"},
                    cursor: "pointer"
                  }}
                >
                  Press Info
                </Typography>
              </Box>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box
                sx={{
                  //  px: {md: 7},
                  mt: 5,
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, mb: 4, fontSize: "22px" }}
                >
                  Contact Us
                </Typography>
                <Typography sx={{ fontSize: "16px", mb: 2, fontWeight: "500", "&:hover": {color: "#E8E1C4"}, cursor: "pointer" }}>
                  info@examplemail.com
                </Typography>
                <Typography sx={{ fontSize: "16px", mb: 2, fontWeight: "500", "&:hover": {color: "#E8E1C4"}, cursor: "pointer" }}>
                  Collins Street West, Victoria 9007, Australia
                </Typography>
                <Typography sx={{ fontSize: "16px", mb: 2, fontWeight: "500", "&:hover": {color: "#E8E1C4"}, cursor: "pointer" }}>+123 456 789</Typography>
              </Box>
            </Grid>

            {/* Follow Us and Subscribe */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Box
                sx={{
                  px: { md: 4 },
                  mt: 5,
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, mb: 2, fontSize: "22px" }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{ display: "flex", gap: 0.5, mb: 3, flexWrap: "wrap" }}
                >
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"}  }}>
                    <FacebookIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"} }}>
                    <XIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"} }}>
                    <TwitterIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"} }}>
                    <InstagramIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"} }}>
                    <PinterestIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", "&:hover": {color: "#E8E1C4"} }}>
                    <GoogleIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", mb: 2, fontSize: "22px" }}
                >
                  Subscribe
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    padding: "2px 10px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Your Email"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontSize: "0.9rem",
                        color: "#2C3E50",
                        flex: 1,
                        ml: 1,
                      },
                    }}
                  />
                  <IconButton
                    variant="contained"
                    sx={{
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#4D4D4D",
                        color: "#fff",
                      },
                      color: "#2C3E50",
                      minWidth: "50px",
                      height: "50px",
                      mr: -1,
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#323C52" }}>
        <Container maxWidth="xl" sx={{ px: { lg: 8 } }}>
          <Box
            sx={{
              pt: 5,
              // textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              color: "white",
              // py: 3,
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: {xs: "grid", sm: "flex"},
                gap: { xs: 1, md: "30px" },
                flexWrap: "wrap,",
                gridTemplateColumns: "1fr, 1fr"
              }}
            >
              <Typography
                component="a"
                href="/"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Home
              </Typography>
              <Typography
                component="a"
                href="/buy"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Buy
              </Typography>
              <Typography
                component="a"
                href="/rent"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Rent
              </Typography>
              <Typography
                component="a"
                href="/sell"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Sell
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Students
              </Typography>
              <Typography
                component="a"
                href="/insights"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                Market Insights
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
               Resources
              </Typography>
              <Typography
                component="a"
                href="/about-us"
                sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" }, "&:hover": {color: "#E8E1C4"}, cursor: "pointer", color: "#fff", textDecoration: "none" }}
              >
                About
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
                mt: -2,
              }}
            >
              <Typography variant="body2">
                Copyright &copy; 2024 Colonial Realty. All rights reserved.
              </Typography>
              <IconButton
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "#fff",
                  },
                  color: "#2C3E50",
                  minWidth: "50px",
                  height: "50px",
                  mr: -1,
                }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <NorthIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterIndex;
