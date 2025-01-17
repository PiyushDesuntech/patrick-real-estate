"use client";

import { Box, Typography, Chip } from "@mui/material";
import React from "react";

const tags = [
  "Apartment",
  "Estate",
  "Luxury",
  "Real",
  "Real Estate",
];

export default function Tags() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        padding: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "600",
          marginBottom: "16px",
          fontSize: "18px",
          color: "#333",
        }}
      >
        Tags
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              fontSize: "14px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
