"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import MostLikedReviews from "./components/MostLikedReviews";
import ReviewForm from "./components/ReviewForm";

export default function Reviews() {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <Box sx={{
      backgroundColor: '#F7F7F7',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: '32px', sm: '48px' },
      overflow: 'hidden',
      position: 'relative',
      padding: { xs: '20px', sm: '40px', lg: '60px' },
      '@media (max-width: 600px)': {
        padding: '10px',
        gap: '16px',
      },
      '@media (min-width: 601px) and (max-width: 960px)': {
        padding: '20px',
        gap: '24px',
      }
    }}>
      <Box sx={{
        ml: { xs: -2, sm: -4, md: -2.5 },
        '@media (max-width: 600px)': {
          ml: 0,
        },
        '@media (min-width: 601px) and (max-width: 960px)': {
          ml: 0,
        }
      }}>
        <Heading />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        pl: { xs: 2, sm: 4, md: 6 },
        mt: { xs: 0, sm: 0, md: 0 },
        flexDirection: { xs: 'column', sm: 'row' },
        '@media (max-width: 600px)': {
          pl: 0,
          flexDirection: 'column',
          alignItems: 'center',
          px: '16px', // Added horizontal padding for mobile
        },
        '@media (min-width: 601px) and (max-width: 960px)': {
          pl: 0,
          flexDirection: 'column',
          alignItems: 'center',
          px: '24px', // Added horizontal padding for tablet
        }
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          pl: { xs: 0, sm: 2, md: 4 },
          ml: { xs: -2, sm: -4, md: -10.5 },
          mt: { xs: -2, sm: -4, md: -10 },
          mr: { xs: 2, sm: 4, md: 3.5 },
          '@media (max-width: 600px)': {
            pl: 0,
            pr: 0,
            ml: 0,
            mt: 0,
            mr: 0,
            width: '100%',
            justifyContent: 'center',
          },
          '@media (min-width: 601px) and (max-width: 960px)': {
            pl: 0,
            pr: 0,
            ml: 0,
            mt: 0,
            mr: 0,
            width: '100%',
            justifyContent: 'center',
          }
        }}>
          <ReviewForm />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: { xs: -2, sm: -4, md: -43.5 },
          pl: { xs: 0, sm: 2, md: 4 },
          '@media (max-width: 600px)': {
            mt: '16px',
            pl: 0,
            width: '100%',
          },
          '@media (min-width: 601px) and (max-width: 960px)': {
            mt: '24px',
            pl: 0,
            width: '100%',
          }
        }}>
          <MostLikedReviews />
        </Box>
      </Box>
    </Box>
  );
}