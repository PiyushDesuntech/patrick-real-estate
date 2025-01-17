"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Side = () => {
  return (
    <Box
      sx={{
        padding: 4,
        
        borderRadius: "8px",  // Removed border here
        display: "flex",
        flexDirection: "column",
        gap: 4, // Space between each box
      }}
    >
      {/* Search Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: 2, color: "#333" }}
        >
          Search
        </Typography>
        <Box
          component="input"
          placeholder="Search..."
          sx={{
            width: "100%",
            padding: 1,
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </Box>

      {/* Categories Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: 2, color: "#333" }}
        >
          Categories
        </Typography>
        <List>
          {[ 
            { name: "Apartment (2)", link: "/categories/apartment" },
            { name: "Condo (1)", link: "/categories/condo" },
            { name: "Family House (3)", link: "/categories/family-house" },
            { name: "Modern Villa (4)", link: "/categories/modern-villa" },
            { name: "Town House (5)", link: "/categories/town-house" },
          ].map((category, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ListItemText>
                <Box
                  component="a"
                  href={category.link}
                  sx={{
                    textDecoration: "none",
                    color: "#333",
                    "&:hover": {
                      color: "#007bff",
                    },
                  }}
                >
                  {category.name}
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Nearby Properties Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: 2, color: "#333" }}
        >
          Nearby Properties
        </Typography>
        <List>
          {[ 
            { name: "Diamond Mansion", link: "/properties/diamond-mansion" },
            { name: "Green Earth Residences", link: "/properties/green-earth" },
            { name: "Luxury Pool Apartments", link: "/properties/luxury-pool" },
          ].map((property, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ListItemText>
                <Box
                  component="a"
                  href={property.link}
                  sx={{
                    textDecoration: "none",
                    color: "#333",
                    "&:hover": {
                      color: "#007bff",
                    },
                  }}
                >
                  {property.name}
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Tags Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: 2, color: "#333" }}
        >
          Tags
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Housing", "Market", "2023", "Real Estate"].map((tag, index) => (
            <Box
              key={index}
              sx={{
                padding: "4px 8px",
                backgroundColor: "#e3e3e3",
                borderRadius: "4px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Side;
