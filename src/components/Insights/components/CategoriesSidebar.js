"use client";
import React, { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
        maxWidth: 360,
        backgroundColor: "#fff",
        borderRadius: "7.83px",
        padding: "20px 24px",
        border: "1.5px solid #ebebeb",
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
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} disablePadding>
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
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ArrowRightIcon sx={{ fontSize: 20, color: '#484848' }} />
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
        ))}
      </List>
    </Box>
  );
}