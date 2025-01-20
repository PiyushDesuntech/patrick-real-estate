"use client";

import React, { useState } from "react";
import { Box, Grid, Typography, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CategoriesSidebar() {
  const [categories] = useState([
    { name: "Apartment", count: 2 },
    { name: "Condo", count: 1 },
    { name: "Family House", count: 1 },
    { name: "Modern Villa", count: 1 },
    { name: "Town House", count: 3 },
  ]);

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
          fontWeight: "600",
          marginBottom: "16px",
          fontSize: "18px",
          color: "#333",
        }}
      >
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  padding: "8px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#555",
                  "&:hover": {
                    color: "#000",
                  },
                  wordWrap: "break-word",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ArrowRightIcon sx={{ fontSize: 20, color: "#484848" }} />
                  <ListItemText
                    primary={category.name}
                    sx={{
                      "& span": {
                        fontSize: "15px",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#888",
                  }}
                >
                  ({category.count})
                </Typography>
              </ListItemButton>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
