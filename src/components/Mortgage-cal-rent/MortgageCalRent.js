"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import RentCalculator from "./components/RentCalculator";
import HeroSection from "./components/HeroContent";
import RentalCostsSection from "./components/RentalCostsSection";

export default function MortgageCalRent() {
  return (
    <Box sx={{
      backgroundColor: '#F7F7F7',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: '32px', sm: '48px' },
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Box sx={{
        paddingLeft: { xs: '26px', sm: '57px', lg: '80px' },
        paddingRight: { xs: '26px', sm: '57px', lg: '80px' },
        paddingTop: { xs: '24px', sm: '32px' },
        marginBottom: { xs: '0px', sm: '-140px' },
        zIndex: { sm: 2 },
        width: { xs: '100%', lg: 'auto' },
        boxSizing: 'border-box'
      }}>
        <Heading />
      </Box>

      <Box sx={{
        zIndex: { sm: 1 },
        width: '100%',
        paddingLeft: { xs: '0px', md: '20px' },
        transition: 'padding 0.3s ease'
      }}>
        <HeroSection />
      </Box>

      <Box sx={{
        paddingLeft: { xs: '20px', sm: '60px', lg: '80px' },
        paddingRight: { xs: '20px', sm: '60px', lg: '80px' },
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <RentCalculator />
      </Box>

      <Box sx={{
        paddingLeft: { xs: '20px', sm: '0px' },
        paddingRight: { xs: '20px', sm: '0px' },
        marginLeft: { xs: '0px', sm: '-57px', lg: '-80px' },
        width: { xs: 'auto', sm: 'calc(100% + 57px)', lg: 'calc(100% + 80px)' },
        transition: 'all 0.3s ease',
        boxSizing: 'border-box',
        maxWidth: { xs: '100%', sm: 'calc(100% + 57px)', lg: 'calc(100% + 80px)' }
      }}>
        <RentalCostsSection />
      </Box>
    </Box>
  );
}