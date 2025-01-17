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
        padding: "20px 24px",
        backgroundColor: "#fff",
        borderRadius: "7.83px",
        width: "100%",
        border: "1.5px solid #ebebeb",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #EAEAEA",
          borderRadius: "7.83px",
          width: "100%",
          backgroundColor: "#fff",
          overflow: "hidden",
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