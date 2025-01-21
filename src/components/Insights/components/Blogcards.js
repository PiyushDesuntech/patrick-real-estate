"use client";

import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

export default function BlogCards() {
  const allBlogCardsData = [
    {
      title: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar1.jpg",
    },
    {
      title: "Housing Markets That Changed the Most This Decade",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar2.jpg",
    },
    {
      title: "Redfin Unveils the Best Canadian Cities for Biking",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar3.jpg", 
    },
    {
      title: "You Can Buy The Piano Teacher's Home from Groundhog Day",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar4.jpg", 
    },
    {
      title: "Why We Should All Support Clear Cooperation",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar5.jpg", 
    },
    {
      title: "12 Walkable Cities Where You Can Live Affordably",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar6.jpg", 
    },
    // Page 2 cards
    {
      title: "The Future of Remote Work in Real Estate",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar1.jpg",
    },
    {
      title: "Top 10 Emerging Real Estate Markets in 2020",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar2.jpg",
    },
    {
      title: "Sustainable Housing Trends to Watch",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar3.jpg",
    },
    {
      title: "Guide to First-Time Home Buying in 2020",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar4.jpg",
    },
    {
      title: "Impact of Technology on Real Estate Sales",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar5.jpg",
    },
    {
      title: "Understanding Property Market Cycles",
      date: "February 28, 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et",
      author: "Admin",
      image: "/Images/Figure1.webp",
      avatarUrl: "/Images/avatar6.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allBlogCardsData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Box sx={{ padding: "24px 0", backgroundColor: "#F7F7F7" }}>
        <Grid container spacing={4}>
          {currentCards.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "7.38px",
                  padding: "16px",
                  border: "1.5px solid #ebebeb",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "220px",
                    position: "relative",
                    borderRadius: "7.38px",
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
                      borderRadius: "8px",
                    }}
                    priority={index < 2}
                    unoptimized
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: "22.15px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: "#484848",
                    lineHeight: 1.4,
                    // height: "50px",
                    overflow: "hidden",
                  }}
                >
                  {card.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  <CalendarTodayIcon sx={{ fontSize: "17.23px", color: "#777777", marginRight: "8px" }} />
                  <Typography sx={{ color: "#777777", fontSize: "17.23px" }}>
                    {card.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#484848",
                    fontSize: "17.23px",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    // height: "44px",
                    overflow: "hidden",
                  }}
                >
                  {card.description}
                </Typography>

                <Box sx={{ marginTop: "auto", borderTop: "1px solid #EBEBEB", paddingTop: "12px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={card.avatarUrl}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Typography sx={{ marginLeft: "12px", fontSize: "17.23px", color: "#777777" }}>
                        {card.author}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#2d3436",
                        cursor: "pointer",
                      }}
                    >
                      <Typography sx={{ fontSize: "17.23px", fontWeight: "500", lineHeight: 1 }}>
                        Read More
                      </Typography>
                      <KeyboardArrowRightIcon sx={{ fontSize: 17, color: "#777777" }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: "8px",
            padding: "8px 16px",
          }}
        >
          <Button
            onClick={() => setCurrentPage(1)}
            sx={{
              backgroundColor: currentPage === 1 ? "#E8E1C4" : "#f5f5f5",
              color: currentPage === 1 ? "#00000099" : "#00000099",
              borderRadius: "50%",
              border: "2.5px solid #EBEBEB",
              minWidth: "55.38px",
              height: "55.38px",
              padding: "10px",
              fontSize: "22px",
              "&:hover": {
                backgroundColor: currentPage === 1 ? "#E8E1C4" : "#e0e0e0",
              },
            }}
          >
            1
          </Button>
          <Button
            onClick={() => setCurrentPage(2)}
            sx={{
              backgroundColor: currentPage === 2 ? "#E8E1C4" : "#f5f5f5",
              color: currentPage === 2 ? "#00000099" : "#00000099",
              borderRadius: "50%",
              border: "2.5px solid #EBEBEB",
              minWidth: "55.38px",
              height: "55.38px",
              padding: "8px",
              fontSize: "22px",
              "&:hover": {
                backgroundColor: currentPage === 2 ? "#E8E1C4" : "#e0e0e0",
              },
            }}
          >
            2
          </Button>
          {currentPage === 1 && (
            <Button
              onClick={() => setCurrentPage(2)}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#00000099",
                borderRadius: "50%",
                border: "2.5px solid #EBEBEB",
                minWidth: "55.38px",
                height: "55.38px",
                padding: "8px",
                fontSize: "22px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <EastIcon />
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

