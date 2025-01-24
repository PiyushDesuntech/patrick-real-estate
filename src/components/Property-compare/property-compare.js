"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import ProjectComparison from "./components/CompareProperty";
import ComparisonSection from "./components/ComparisonSection";

export default function PropertyCompare() {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '32px', sm: '48px' },
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: { xs: '50px', sm: '200px', lg: '250px' },
      }}
    >
      <Box
        sx={{
          paddingLeft: { xs: '26px', sm: '57px', lg: '80px' },
          paddingRight: { xs: '26px', sm: '57px', lg: '80px' },
          paddingTop: { xs: '24px', sm: '32px' },
          marginBottom: { xs: '0px', sm: '-140px' },
          zIndex: { sm: 2 },
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <Heading />
        <Box
          sx={{
            maxWidth: '1250px',
            width: '100%',
            margin: '0 auto',
            paddingLeft: '11px',
          }}
        >
          <ProjectComparison />
          <ComparisonSection />
        </Box>
      </Box>
    </Box>
  );
}