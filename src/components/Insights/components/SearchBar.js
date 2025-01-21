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
        padding: { xs: "16px", sm: "39px" },
        backgroundColor: "#fff",
        borderRadius: "7.38px",
        width: "100%",
        border: "1.5px solid #ebebeb",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #D8D8D8",
          borderRadius: "7.38px",
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
            color: "#484848",
            "&::placeholder": {
              color: "#666",
              fontSize: "16px", // Standardized font-size
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
            color: "#484848",
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
