import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const AgentDetailsProfile = () => {
  return (
    <Box
      sx={{
        // maxWidth: 600,
        margin: "auto",
        // padding: 3,
        // border: '1px solid #ddd',
        // borderRadius: 2,
        // boxShadow: 3,
        mt: 3,
      }}
    >
      {/* Header Section */}
      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
        Tom Willson
      </Typography>
      <Typography
        sx={{ fontSize: "12.52px", fontWeight: 400, color: "#484848" }}
      >
        Phone: 91 456 ***
      </Typography>
      <Typography
        sx={{ fontSize: "12.52px", fontWeight: 400, color: "#484848" }}
      >
        Email:{" "}
        <Link
          href="mailto:tomwilson@apus.com"
          sx={{
            textDecoration: "none",
            fontSize: "12.52px",
            fontWeight: 400,
            color: "#484848",
          }}
        >
          tomwilson@apus.com
        </Link>
      </Typography>

      {/* Stats Section */}
      <Divider
        sx={{
          borderWidth: "0.71px",
          borderColor: "rgba(0, 0, 0, 0.12)",
          mt: 1
        }}
      />
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            199
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Closed Sales
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $95.4M
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Total Value
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $224K - $1.7M
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Price Range
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $479.3K
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Average Price
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{ my: 2, borderWidth: "0.71px", borderColor: "rgba(0, 0, 0, 0.12)" }}
      />

      {/* About Section */}
      <Typography sx={{ fontSize: "14.29px", fontWeight: 500 }}>
        About Amy
      </Typography>
      <Typography sx={{ fontSize: "12.86px", fontWeight: 500 }}>
        Home Types:{" "}
        <span style={{ fontWeight: 300 }}>
          House, MultiFamily, Lot/Land, Condo, For Rent
        </span>
      </Typography>
      <Typography sx={{ fontSize: "12.86px", fontWeight: 500 }} mt={1}>
        Years of Experience: <span style={{ fontWeight: 300 }}> 25</span>
      </Typography>

      {/* Links Section */}
      {/* <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: "12.86px", fontWeight: 500 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              mr: 2,
              color: "#00488A",
              fontSize: "12.86px",
              fontWeight: 500,
            }}
          >
            Agent Website
          </Link>
        </Typography>
        <IconButton href="#" size="small" sx={{ color: "#00488A" }}>
          <Facebook />
        </IconButton>
        <IconButton href="#" size="small" sx={{ color: "#00488A" }}>
          <Instagram />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default AgentDetailsProfile;
