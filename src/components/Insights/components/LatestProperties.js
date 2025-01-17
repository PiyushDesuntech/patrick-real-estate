"use client";
import React from "react";
import { Box, Typography, List, ListItem, Card, CardContent } from "@mui/material";
import Image from 'next/image';

export default function LatestProperties() {
  const properties = [
    {
      image: "./Images/Figure1.webp",
      title: "Diamond Manor...",
      price: "$6500",
      details: "Beds: 4 Baths: 2 150 sqft",
    },
    {
      image: "./Images/Figure1.webp",
      title: "Eaton Garth Penthouse",
      price: "$7500",
      details: "Beds: 4 Baths: 1 220 sqft",
    },
    {
      image: "./Images/Figure1.webp",
      title: "Skyper Pool Apartment",
      price: "$1200/mo",
      details: "Beds: 3 Baths: 2 110 sqft",
    },
  ];

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
        Latest Properties
      </Typography>
      <List>
        {properties.map((property, index) => (
          <ListItem key={index} disablePadding sx={{ marginBottom: "16px" }}>
            <Card
              sx={{
                display: "flex",
                width: "100%",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 80,
                  height: 80,
                  marginRight: "16px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="80px"
                  style={{
                    objectFit: "cover",
                  }}
                  priority={index === 0}
                  unoptimized
                />
              </Box>
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#333",
                    marginBottom: "8px",
                  }}
                >
                  {property.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#000",
                    marginBottom: "4px",
                  }}
                >
                  {property.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  {property.details}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}