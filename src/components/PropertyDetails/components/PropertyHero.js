"use client"
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useRouter } from "next/navigation";

export default function PropertyHero() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundImage: "url(/Images/PropertyDetailsBG.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "450px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: "30px", flexWrap: "wrap" }}>
            <Button
              // onClick={() => router.back()}
              // startIcon={<WestIcon sx={{ fontSize: "30px" }} />}
              variant="contained"
              sx={{
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "#fff",
                  boxShadow: "none"
                },
                color: "#00000099",
                minWidth: "233px",
                height: "53px",
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "6px"
              }}
            >
              Make A Home Tour
            </Button>
            <Button
              onClick={() => router.back()}
              startIcon={<WestIcon sx={{ fontSize: "30px" }} />}
              variant="contained"
              sx={{
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "#fff",
                  boxShadow: "none"
                },
                color: "#00000099",
                minWidth: "233px",
                height: "53px",
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "6px"
              }}
            >
              Back To Search
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: {xs: "26px", sm: "28px", md: "30px", lg: "37px"}, fontWeight: 600, color: "#fff" }}
              >
                Diamond Manor Apartment
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#fff",
                  fontSize: {xs: "14px", md: "17px"},
                  fontWeight: 400,
                }}
              >
                <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                22-05 Astoria Blvd, Astoria
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography
                sx={{ fontSize: {xs: "26px", sm: "28px", md: "30px", lg: "37px"}, color: "#fff", fontWeight: 600 }}
              >
                $6500
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    // height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <FavoriteBorderIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/>
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    // height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <SyncAltOutlinedIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/>
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    // height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)", fontSize: {xs: "small", sm: "medium"} }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
