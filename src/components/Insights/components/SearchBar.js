"use client";
import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #EAEAEA",
          borderRadius: "16px",
          width: "100%",
          backgroundColor: "#fff",
          overflow: "hidden",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
        }}
      >
        <InputBase
          sx={{
            flex: 1,
            padding: "16px 20px",
            fontSize: "16px",
            color: "#333",
            "::placeholder": {
              color: "#666",
              opacity: 1,
              fontSize: "20px",
              fontWeight: 400,
            },
            "& input": {
              padding: 0,
            },
          }}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            padding: "12px 16px",
            color: "#666",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "28px",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}