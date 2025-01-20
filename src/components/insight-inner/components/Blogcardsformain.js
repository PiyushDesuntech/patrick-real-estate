"use client";

import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Image from "next/image";

export default function BlogCard() {
  const card = {
    title: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
    date: "February 28, 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
    author: "Admin",
    image: "/Images/Figure1.webp",
    avatarUrl: "/Images/avatar1.jpg",
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Image Container with rounded corners */}
      <Box
        sx={{
          width: "100%",
          height: "220px",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <Image
          src={card.image}
          alt={card.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          fill
          style={{
            objectFit: "cover",
            borderRadius: "12px",
          }}
          priority
          unoptimized
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#2d3436",
          lineHeight: 1.4,
          height: "50px",
          overflow: "hidden",
        }}
      >
        {card.title}
      </Typography>

      {/* Date */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
        <CalendarTodayIcon
          sx={{ fontSize: 16, color: "#a0a0a0", marginRight: "8px" }}
        />
        <Typography
          sx={{
            color: "#a0a0a0",
            fontSize: "14px",
          }}
        >
          {card.date}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: "#636e72",
          fontSize: "14px",
          lineHeight: 1.6,
          marginBottom: "16px",
          height: "44px",
          overflow: "hidden",
        }}
      >
        {card.description}
      </Typography>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={card.avatarUrl} sx={{ width: 32, height: 32 }} />
          <Typography
            sx={{
              marginLeft: "12px",
              fontSize: "14px",
              color: "#2d3436",
            }}
          >
            {card.author}
          </Typography>
        </Box>
        <Typography
          component="span"
          sx={{
            color: "#2d3436",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Read More →
        </Typography>
      </Box>
    </Box>
  );
}
