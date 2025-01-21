"use client";

import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import BlogCards from "./components/Blogcards";
import LatestProperties from "./components/LatestProperties";
import CategoriesSidebar from "./components/CategoriesSidebar";
import Heading from "./components/Heading";

export default function Insights() {
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
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Page Heading */}
        <Box sx={{ ml: { xs: 0, md: -15 } }}>
          <Heading />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2.5fr 1fr" },
            gap: { xs: 4, md: 3 },
            mt: 5,
          }}
        >
          {/* Main Content left Side */}
          <Box>
            <BlogCards 
              currentCards={currentCards}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
          {/* Sidebar or right side*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              mt: 3,
            }}
          >
            {/* Search */}
            <Box>
              <SearchBar />
            </Box>
            {/* Categories */}
            <CategoriesSidebar />
            {/* Latest Properties */}
            <LatestProperties />
            {/* Tags */}
            <Tags />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}