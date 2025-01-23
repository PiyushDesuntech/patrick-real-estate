"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Icon } from "@iconify/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    images: [
      "/Images/Feature1.svg",
      "/Images/Feature2.svg",
      "/Images/Feature3.svg",
    ],
    title: "Luxury Family Home",
    price: "$1350/mo",
    beds: 2,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    images: [
      "/Images/Feature2.svg",
      "/Images/Feature3.svg",
      "/Images/Feature1.svg",
    ],
    title: "House Hollywood",
    price: "$2250/mo",
    beds: 4,
    baths: 2,
    sqft: 1600,
    tag: "For Rent",
    feature: "Feature",
  },
  {
    images: [
      "/Images/Feature3.svg",
      "/Images/Feature1.svg",
      "/Images/Feature2.svg",
    ],
    title: "Selway Apartment",
    price: "$1550/mo",
    beds: 1,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    images: [
      "/Images/Feature1.svg",
      "/Images/Feature2.svg",
      "/Images/Feature3.svg",
    ],
    title: "Arlo Apartment",
    price: "$2150/mo",
    beds: 4,
    baths: 2,
    sqft: 1500,
    tag: "For Rent",
    feature: "Feature",
  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#fff",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
);
const PrevArrow1 = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 1,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 100,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      backgroundColor: "rgba(252, 250, 250, 0.43)",
      color: "#D9D9D9",
      // border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "rgba(249, 248, 248, 0.17)",
      },
    }}
  >
    <ArrowRightAltIcon sx={{ transform: "rotate(180deg)" }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#fff",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);
const NextArrow1 = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 1,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 100,
      backgroundColor: "rgba(252, 250, 250, 0.43)",
      color: "#D9D9D9",
      // border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "rgba(249, 248, 248, 0.17)",
      },
    }}
  >
    <ArrowRightAltIcon />
  </IconButton>
);

const FeatureProperties = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardSliderSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow1 />,
    nextArrow: <NextArrow1 />,
  };

  return (
    <Box
      // sx={{
      //   backgroundImage:
      //     "linear-gradient(to top, rgba(251, 251, 251, 0.69) 0%, rgba(255, 255, 255, 0) 100%), url(/Images/FirstTimeBG.svg)",
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //     backgroundPosition: "center",
      //     height: "100%",
      //     width: "100%",
      //   // mt: -4, 
      //   pt: 10
      // }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 2, px: { lg: 4 },  backgroundImage:
          "linear-gradient(to top, rgba(251, 251, 251, 0.69) 0%, rgba(255, 255, 255, 0) 100%), url(/Images/FirstTimeBG.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        // mt: -4, 
        pt: 10 }}>
          <Typography sx={{ textAlign: "center", fontSize: "40px", fontWeight: 500 }} >
            Featured Properties.
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400,color: "#585858" }}>
            Handpicked properties by our team.
          </Typography>
          <Slider {...settings}>
            {data.map((item, index) => (
              <Box key={index} mt={3} sx={{ p: { xs: 4, lg: 0.5 } }}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: { xs: "280px", md: "387px", lg: "387px" },
                    width: { xs: "100%", lg: "339px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "&:hover  .slick-active  .image-container": {
                      transform: "scale(1.2)",
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Slider {...cardSliderSettings}>
                      {item.images.map((img, imgIndex) => (
                        <Box
                          key={imgIndex}
                          className="image-container"
                          sx={{
                            height: { xs: "280px", md: "387px", lg: "387px" },
                            width: { xs: "100%", lg: "339px" },
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "transform 0.3s ease-in-out",
                          }}
                        />
                      ))}
                    </Slider>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      height: { xs: "80%", md: "85%", lg: "95%" },
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, m: 2 }}>
                      <Chip
                        label={item.tag}
                        sx={{
                          bgcolor: "#3E4C66",
                          color: "#fff",
                          width: "fit-content",
                          borderRadius: 1,
                          fontSize: "14px",
                          "&:hover": {bgcolor: "#fff", color: "#3E4C66"}
                        }}
                      />
                      <Chip
                        label={item.feature}
                        sx={{
                          bgcolor: "#E8E1C4",
                          color: "#3E4C66",
                          width: "fit-content",
                          borderRadius: 1,
                          fontSize: "14px",
                          "&:hover": {bgcolor: "#3E4C66", color: "#fff"}
                        }}
                      />
                    </Box>
                    <CardContent sx={{ color: "#fff" }}>
                      <Typography sx={{fontSize: "25px", fontWeight: 700}} mt={1}>
                        {item.price}
                      </Typography>
                      <Typography sx={{fontSize: "24px", fontWeight: 700}}>
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "space-between",
                          alignItems: "center",
                          gap: {xs: 1, md: 4}
                        }}
                      >
                       <Box sx={{display: "flex", gap: {xs: 1, md: 2}}}>
                       <Typography
                          mt={1}
                          sx={{ fontSize: "14px", fontWeight: 400 }}
                        >
                          Beds: {item.beds}
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{ fontSize: "14px", fontWeight: 400 }}
                        >
                          Baths: {item.baths} 
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{ fontSize: "14px", fontWeight: 400 }}
                        >
                          Sqft:{" "}
                          {item.sqft}
                        </Typography>
                        
                       </Box>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                          <IconButton
                            sx={{
                              borderRadius: "3px",
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.48)",
                                // color: "#4D4D4D",
                              },
                            }}
                          >
                            <FavoriteBorderIcon />
                          </IconButton>
                          <IconButton
                            sx={{
                              borderRadius: "3px",
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.48)",
                                // color: "#4D4D4D",
                              },
                            }}
                          >
                            {/* <ShareIcon /> */}
                            <Icon icon="tabler:transfer" style={{ fontSize: "24px", transform: "scaleX(-1)", }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "38px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "#fff",
                },
                color: "#4D4D4D",
                border: "1px solid #000",
                textTransform: "none",
                px: 5,
                py: 1,
                width: "215px",
                height: "53px",
                borderRadius: "7px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureProperties;
