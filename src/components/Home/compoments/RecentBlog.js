import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function RecentBlog() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/Images/recentBG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        mt: 8,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { md: 8 }, pb: 5 }}>
        <Grid container spacing={2}>
          <Grid item md={6.5} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: { xs: 2, md: 2 },
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
                Recent Blog{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    height: "147px",
                    width: "213px",
                    overflow: "hidden",
                    mt: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src="/Images/RecentBlog.svg"
                    alt="Colonial Realty Associates"
                    layout="intrinsic"
                    width={250}
                    height={100}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "403px",
                    mt: 4,
                  }}
                >
                  <Typography sx={{ fontSize: "23px", fontWeight: 500 }}>
                    My Two Cents: How Tax Changes will Affect - Home Buying in
                    2019
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: "16px" }}>
                      05/17/2019
                    </Typography>
                    <Button
                      endIcon={<EastIcon sx={{ color: "#fff" }} />}
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5.5} xs={12} sx={{ display: "flex" }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Divider
                sx={{
                  borderWidth: "2px",
                  borderColor: "#ffffff",
                  width: "80%",
                  opacity: "20%",
                  mt: 4,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                py: { xs: 2, md: 3 },
                pl: { xs: 0, md: 8 },
                color: "#fff",
                gap: 3,
                flexGrow: 1,
              }}
            >
              <Typography
                sx={{ textAlign: "start", fontSize: "40px", fontWeight: 600 }}
              >
                Never miss an opportunity.
              </Typography>
              <Typography
                sx={{ textAlign: "start", fontSize: "18px", fontWeight: 500 }}
              >
                Subscribeto our newsletter for all updates.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Email Address"
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
                          minWidth: "150px",
                          height: "56px",
                          mr: -1.8,
                          borderRadius: "0px 4px 4px 0px",
                          width: "100%",
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        Subscribe
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
                    border: "none",
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
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
      </Container>
    </Box>
  );
}
