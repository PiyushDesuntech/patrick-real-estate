"use client"
import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Box
      sx={{
        width: { xs: "355px", sm: "340px", md: "449px" },
        height: { xs: "80px", sm: "90px", md: "100px" },
        ml:{xs: "-4px", sm: "-5px", md: "-10px"},
        backgroundColor: "#fff",
        borderRadius: "8.12px",
        padding: { xs: "17px", sm: "24px", md: "20px" },
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out"
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "24.37px" },
              fontWeight: "400",
              color: "#314259",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.5px"
            }}
          >
            Advanced Search
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "1.5px solid #E5E5E5",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <ExpandMoreIcon
              sx={{
                fontSize: { xs: "16px", sm: "24px", md: "24px" },
                color: "#666666"
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}