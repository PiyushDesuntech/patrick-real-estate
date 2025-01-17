"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function PaginationComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        padding: "8px 16px",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#d2b48c",
          color: "#fff",
          borderRadius: "50%",
          minWidth: "36px",
          height: "36px",
          padding: "8px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#d2b48c",
          },
        }}
      >
        1
      </Button>
      <Button
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          borderRadius: "50%",
          minWidth: "36px",
          height: "36px",
          padding: "8px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        2
      </Button>
      <Button
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          borderRadius: "50%",
          minWidth: "36px",
          height: "36px",
          padding: "8px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <KeyboardArrowRightIcon />
      </Button>
    </Box>
  );
}
