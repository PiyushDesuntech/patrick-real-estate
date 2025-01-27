"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import Profile from "./components/profilepage";

export default function ProfileIndex() {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '16px', sm: '24px', md: '48px' },
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: { xs: '32px', sm: '100px', md: '200px' },
      }}
    >
      <Box
        sx={{
          paddingLeft: { xs: '16px', sm: '24px', md: '50px' },
          paddingRight: { xs: '16px', sm: '24px', md: '32px' },
          paddingTop: { xs: '16px', sm: '24px', md: '32px' },
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Heading />
        
        <Box
          sx={{
            width: '100%',
            maxWidth: '1250px',
            marginTop: '24px',
            ml: { xs: -1, sm: 1, md: 3 },
            mt: { xs: 2, sm: -1, md: -2 },
          }}
        >
          <Profile />
        </Box>
      </Box>
    </Box>
  );
}