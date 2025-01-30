"use client";
import React, { useState } from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Icon } from "@iconify/react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

export default function OurMission() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <Container maxWidth="xl" sx={{ px: { lg: 6, xs: 1 }, mt: "60px" }}>
      <Box>
        <Typography
          sx={{ textAlign: "center", fontSize: "36px", fontWeight: 600 }}
        >
          Our Mission Is To Find House
        </Typography>

        <Grid container spacing={4} sx={{ mt: "47px" }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "70px",
                p: 2,
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "19px", color: "#484848" }}
              >
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "17px", color: "#484848" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                quis ligula eu lectus vulputate porttitor sed feugiat nunc.
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor, lectus orci elementum augue, eget auctor metus ante sit
                amet velit.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "17px", color: "#484848" }}
              >
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </Typography>
              <Box sx={{ padding: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    textAlign="center"
                    sx={{ display: "flex", gap: 2 }}
                  >
                    <Icon
                      icon="uil:user"
                      style={{ fontSize: "68px", color: "#B29D70" }}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: "27px",
                          color: "#484848",
                        }}
                      >
                        14,768
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        Customers to date
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    textAlign="center"
                    sx={{ display: "flex", gap: 2 }}
                  >
                    <Icon
                      icon="solar:home-outline"
                      style={{ fontSize: "68px", color: "#B29D70" }}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: "27px",
                          color: "#484848",
                        }}
                      >
                        $13 Billion
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        In home sales
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    textAlign="center"
                    sx={{ display: "flex", gap: 2 }}
                  >
                    <CurrencyExchangeOutlinedIcon
                      //   icon="mdi:currency-usd"
                      style={{ fontSize: "68px", color: "#B29D70" }}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: "27px",
                          color: "#484848",
                        }}
                      >
                        $85 Million
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        In Savings
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 0, lg: 2 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "400px",
                  md: "100%",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(/Images/ourmissions.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      background: "#B3A87A",
                      color: "#fff",
                      width: 86,
                      height: 86,
                      "&:hover": {
                        background: "#fff",
                        color: "#B3A87A",
                      },
                    }}
                    onClick={handlePlayVideo}
                  >
                    <PlayArrowOutlinedIcon sx={{ fontSize: 48 }} />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
