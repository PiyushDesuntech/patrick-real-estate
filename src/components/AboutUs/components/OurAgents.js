"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";

const agents = [
  {
    name: "Agent Pakulla",
    role: "Marketing",
    image: "/Images/agent1.svg", // Replace with actual images
  },
  {
    name: "Nina Walker",
    role: "Accountant",
    image: "/Images/agent1.svg",
  },
  {
    name: "Tom Wilson",
    role: "Marketing",
    image: "/Images/agent1.svg",
  },
  {
    name: "Samuel Smith",
    role: "Accountant",
    image: "/Images/agent1.svg",
  },
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "0px",
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      boxShadow: 2,
      "&:hover": { backgroundColor: "grey.200" },
    }}
  >
    <WestIcon  sx={{color: "#006C70"}}/>
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "0px",
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      boxShadow: 2,
      "&:hover": { backgroundColor: "grey.200" },
    }}
  >
    <EastIcon sx={{color: "#006C70"}} />
  </IconButton>
);

const OurAgents = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{px:{xs: 2, lg: 7}}}>
      <Box sx={{ textAlign: "center",  }}>
      <Typography sx={{fontSize: "36.92px", fontWeight: 700, color: "#484848"}} gutterBottom>
        Our Agents
      </Typography>
      <Typography  sx={{ mb: 3, color: "#484848", fontSize: "19.69px", fontWeight: 400 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Slider {...settings}>
          {agents.map((agent, index) => (
           <Box key={index} p={2}>
             <Box sx={{ margin: "0 auto", border: "2px solid #EBEBEB", borderRadius: "8px", p: 1 }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  src={agent.image}
                  alt="agent"
                  layout="responsive"
                  width={650}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <CardContent>
                <Typography sx={{fontSize: "22px", cplor: "#484848", fontWeight: 500}}>{agent.name}</Typography>
                <Typography sx={{fontSize: "17px", cplor: "#484848", fontWeight: 400}}>
                  {agent.role}
                </Typography>
              </CardContent>
            </Box>
           </Box>
          ))}
        </Slider>
      </Box>
    </Box>
    </Container>
  );
};

export default OurAgents;
