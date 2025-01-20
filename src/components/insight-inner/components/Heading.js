"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        padding: "16px",
         
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            color: "#6C757D",  
            fontSize: "14px",  
            fontWeight: "normal",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            color: "#6C757D", 
            fontSize: "14px", 
            fontWeight: "normal",
          }}
        >
          &gt;
        </Typography>
        <Typography
          sx={{
            color: "#E8E1C4", 
            fontSize: "14px", 
            fontWeight: "normal",
          }}
        >
          Insight
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#484848", 
          fontSize: "36px", 
          fontWeight: "bold",
          marginTop: "8px", 
        }}
      >
        Insight
      </Typography>
    </Box>
  );
}
