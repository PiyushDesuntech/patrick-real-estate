"use client";

import { Box, Typography, Chip } from "@mui/material";
import React from "react";

const tags = ["Apartment", "Estate", "Luxury", "Real", "Real Estate"];

export default function Tags() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "7.38px", 
        padding: { xs: "16px", sm: "20px 24px" },
        border: "1.5px solid #ebebeb",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          marginBottom: "16px",
          fontSize: "22.15px",
          color: "#484848",
        }}
      >
        Tags
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              fontSize: "17.23px",
              backgroundColor: "#f5f5f5",
              color: "#484848",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              height: "49px"
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
