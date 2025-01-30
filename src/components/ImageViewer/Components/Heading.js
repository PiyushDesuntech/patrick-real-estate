"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

export default function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        // border:"1px solid red",
        padding: "50px",
         
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
         
        }}
      >
        <Typography
          sx={{
            color: "#777777",  
            fontSize: "14px",  
            fontWeight: "normal",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            color: "#E8E1C4", 
            fontSize: "14px", 
            fontWeight: "normal",
          }}
        >
          &gt;
        </Typography>
        <Typography
          sx={{
            color: "#E8E1C4", 
             fontSize: {md:"14px", sm:"10px", xs:"10px"},
            fontWeight: "normal",
          }}
        >
        Properties Image Viewer
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#484848", 
          fontSize: {md:"36px", sm:"15px", xs:"15px"}, 
          fontWeight: "bold",
          marginTop: "5px", 
        }}
      >
    Properties Image Viewer
      </Typography>
    </Box>
  );
}
