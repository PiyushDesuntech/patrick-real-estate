import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WantCall() {
  return (
    <Container
      maxWidth="xl"
      sx={{ px: { lg: "94px", md: 0, xs: 2 }, pt: { xs: 0,sm:2, lg: 5 } }}
    >
      <Box
        sx={{
          backgroundImage: "url(/Images/WantCallBG.svg)", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image
          height: "100%", // Adjust height as needed
          width: "100%", // Adjust width as needed
          mt: {xs: 0, sm: 3},
          display: "flex",
          justifyContent: "center",
          alignItems: "center,",
          flexDirection: "column",
          py: {xs: 1, md: 6},
        }}
      >
        <Grid container sx={{px: {xs: 0, md: 2}}}>
          <Grid item xs={12} md={6.5}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                    padding: { xs: "1rem", sm: 0 },
                  }}
                >
                  <Image
                    src="/Images/WantCall1.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                  }}
                >
                  <Image
                    src="/Images/WantCall2.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain", transform: "scaleX(-1)" }}
                  />
                </Box>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                    // padding: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src="/Images/WantCall3.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ px: { xs: 2, md: 6 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                py: { xs: 2, lg: 15 },
                px: { xs: 0, md: 2 },
                gap: 3,
                width: { lg: "500px", md: "100%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "start",
                  fontWeight: 700,
                  fontSize: { xs: "26px", md: "40px" },
                }}
              >
                Request a Call Back from One of Our Agents
              </Typography>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: 500,
                  color: "#585858",
                }}
              >
                Real people, Real answers. Real quick. Let one of our Client
                Conciergeshelp you get started on your home search. Enter your
                phone number and we’ll call you within 30 seconds.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Phone Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E0D8C3",
                          "&:hover": {
                            backgroundColor: "#3E4C66",
                            color: "#fff",
                          },
                          color: "#4D4D4D",
                          minWidth: { xs: "fit-content", sm: "118px" },
                          height: "55px",
                          mr: -1.7,
                          borderRadius: "0px 4px 4px 0px",
                          boxShadow: "none",
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        Call Back
                      </Button>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    border: "none",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    border: "1px solid #A0A0A0",
                    "&:hover fieldset": {
                      border: "1px solid #A0A0A0",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #A0A0A0",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
