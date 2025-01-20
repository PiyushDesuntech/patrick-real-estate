import { Box, Container } from "@mui/material";
import React from "react";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import BlogCard from "./components/Blogcards";
import LatestProperties from "./components/LatestProperties";
import CategoriesSidebar from "./components/CategoriesSidebar";
import Heading from "./components/Heading";

export default function Insights() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
        }}
      >
        <Heading />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2.5fr 1fr" },
            gap: { xs: 4, md: 3 },
            mt: 5,
          }}
        >
          {/* Main Content */}
          <Box>
            <BlogCard />
          </Box>

          {/* Sidebar */}
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