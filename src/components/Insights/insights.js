"use client"
import { Box, Container } from "@mui/material";
import React from "react";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import BlogCard from "./components/Blogcards";
import LatestProperties from "./components/LatestProperties";
import CategoriesSidebar from "./components/CategoriesSidebar";
import Heading from "./components/Heading";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
  },
});


export default function Insights() {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Clean up after component unmount
    };
  }, []);
  
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <Container
        maxWidth="xl"
        sx={{
          px: {xs: 1, lg: 8 },
        }}
      >
        <Heading />
        <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: { xs: 4, md: 4 },
            mt: -1,
            px: {xs: 0, lg: 2}
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
        </ThemeProvider>
      </Container>
    </Box>
  );
}