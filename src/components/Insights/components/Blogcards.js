"use client";

import React from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

const BlogCards = ({ currentCards, currentPage, setCurrentPage }) => {
  return (
    <>
      <Box sx={{ padding: "24px 0", backgroundColor: "#F7F7F7" }}>
        <Grid container spacing={3}>
          {currentCards.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "7.38px",
                  padding: "16px",
                  border: "1.5px solid #ebebeb",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "220px",
                    position: "relative",
                    borderRadius: "7.38px",
                    overflow: "hidden",
                    marginBottom: "16px",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    priority={index < 2}
                    unoptimized
                  />
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: "#484848",
                    lineHeight: 1.4,
                    height: "50px",
                    overflow: "hidden",
                  }}
                >
                  {card.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  <CalendarTodayIcon sx={{ fontSize: 16, color: "#777777", marginRight: "8px" }} />
                  <Typography sx={{ color: "#777777", fontSize: "14px" }}>
                    {card.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#484848",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    height: "44px",
                    overflow: "hidden",
                  }}
                >
                  {card.description}
                </Typography>

                <Box sx={{ marginTop: "auto", borderTop: "1px solid #EBEBEB", paddingTop: "12px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={card.avatarUrl}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Typography sx={{ marginLeft: "12px", fontSize: "14px", color: "#777777" }}>
                        {card.author}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#2d3436",
                        cursor: "pointer",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", fontWeight: "500", lineHeight: 1 }}>
                        Read More
                      </Typography>
                      <KeyboardArrowRightIcon sx={{ fontSize: 17, color: "#777777" }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: "8px",
            padding: "8px 16px",
          }}
        >
          <Button
            onClick={() => setCurrentPage(1)}
            sx={{
              backgroundColor: currentPage === 1 ? "#E8E1C4" : "#f5f5f5",
              color: currentPage === 1 ? "#00000099" : "#00000099",
              borderRadius: "50%",
              border: "2.5px solid #EBEBEB",
              minWidth: "55.38px",
              height: "55.38px",
              padding: "10px",
              fontSize: "22px",
              "&:hover": {
                backgroundColor: currentPage === 1 ? "#E8E1C4" : "#e0e0e0",
              },
            }}
          >
            1
          </Button>
          <Button
            onClick={() => setCurrentPage(2)}
            sx={{
              backgroundColor: currentPage === 2 ? "#E8E1C4" : "#f5f5f5",
              color: currentPage === 2 ? "#00000099" : "#00000099",
              borderRadius: "50%",
              border: "2.5px solid #EBEBEB",
              minWidth: "55.38px",
              height: "55.38px",
              padding: "8px",
              fontSize: "22px",
              "&:hover": {
                backgroundColor: currentPage === 2 ? "#E8E1C4" : "#e0e0e0",
              },
            }}
          >
            2
          </Button>
          {currentPage === 1 && (
            <Button
              onClick={() => setCurrentPage(2)}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#00000099",
                borderRadius: "50%",
                border: "2.5px solid #EBEBEB",
                minWidth: "55.38px",
                height: "55.38px",
                padding: "8px",
                fontSize: "22px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <EastIcon />
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default BlogCards;