import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function JoinUs() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/Images/Join.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ px: { md: 7 }, py: {xs: 3, md: 4} }}>
          <Grid item md={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: {xs: 2, md: 10},
                gap: 2,
                alignItems: {xs: "center", md: "flex-start"}
              }}
            >
              <Typography sx={{ fontSize: {xs:"26px", md: "40px"}, fontWeight: 600 }}>
                Interested in a career in real estate{" "}
              </Typography>
              <Typography sx={{ fontSize: {xs:"12px",md: "16px"}, fontWeight: 500 }}>
                Maecenas pharetra neque maximus nunc semper, in faucibus quam
                facilisis.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                py: {xs: 2, md: 9},
                flexWrap: {xs: "wrap", lg: "nowrap"},
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                  },
                  color: "#4D4D4D",
                  minWidth: "233px",
                  height: "53px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}
              >
                Contact With Us
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                  },
                  color: "#4D4D4D",
                  minWidth: "233px",
                  height: "53px",
                  fontSize: "16px",
                  fontWeight: 500
                }}
              >
                Know More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
