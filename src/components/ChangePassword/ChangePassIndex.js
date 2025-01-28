"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import ChangePassMain from "./components/ChangePassMain";

export default function ChangePassIndex() {
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
        <ChangePassMain />
      </Box>
    </Box>
  );
}