import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import BlogCard from "./components/Blogcards";
import LatestProperties from "./components/LatestProperties";
import CategoriesSidebar from "./components/CategoriesSidebar";
import Heading from "./components/Heading";

export default function HomeIndex() {
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
            gap: { xs: 4, md: 6 },
            mt: 5,
          }}
        >
          {/* Main Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <BlogCard sx={{ height: 320 }} />
          </Box>

          {/* Sidebar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: 4,
            }}
          >
            {/* Search */}
            <Box>
              <SearchBar
                sx={{
                  "& input": {
                    padding: "16px 20px",
                    borderRadius: 2,
                    border: "1px solid #ccc",
                    fontSize: "1.1rem",
                    width: "100%",
                    backgroundColor: "#fff",
                  },
                }}
              />
            </Box>

            {/* Categories */}
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              </Typography>
              <CategoriesSidebar
                sx={{
                  "& ul": {
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  },
                  "& li": {
                    display: "flex",
                    justifyContent: "space-between",
                    py: 1.5,
                    fontSize: "1.1rem",
                  },
                }}
              />
            </Box>

            {/* Latest Properties */}
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              </Typography>
              <LatestProperties
                sx={{
                  "& .property-item": {
                    display: "flex",
                    gap: 3,
                    mb: 3,
                    pb: 3,
                    borderBottom: "1px solid #ddd",
                    "&:last-child": {
                      borderBottom: "none",
                    },
                  },
                  "& img": {
                    height: 90,
                    width: 90,
                    borderRadius: 1,
                  },
                  "& .details": {
                    fontSize: "1rem",
                  },
                }}
              />
            </Box>

            {/* Tags */}
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              </Typography>
              <Tags
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  "& .tag": {
                    padding: "8px 16px",
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    fontSize: "1rem",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}