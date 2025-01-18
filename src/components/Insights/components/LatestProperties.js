"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function LatestProperties() {
  const properties = [
    {
      image: "./Images/Figure1.webp",
      title: "Diamond Manor Luxury Estate with amazing views",
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
      title: "Skyper Pool Apartment in downtown area",
      price: "$1200/mo",
      details: "Beds: 3 Baths: 2 110 sqft",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "7.38px",  // Simplified border-radius
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
          color: "#484848",
        }}
      >
        Latest Properties
      </Typography>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "110.77px",
                  height: "110.77px",
                  marginRight: "16px",
                  borderRadius: "7.38px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="110.77px"
                  style={{
                    objectFit: "cover",
                  }}
                  priority={index === 0}
                  unoptimized
                />
              </Box>
              <CardContent
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  marginTop: "16px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#484848",
                    marginBottom: "8px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "220px",
                    fontWeight: "700",  // Bolder title
                  }}
                >
                  {property.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
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
                    color: "#484848",
                  }}
                >
                  {property.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
