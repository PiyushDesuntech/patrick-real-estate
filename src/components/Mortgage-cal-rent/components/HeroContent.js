"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const HeroContent = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "16px", sm: "24px" },
        alignItems: {
          xs: "flex-start", 
          sm: "flex-start"
        },
        width: { xs: "100%", sm: "auto" },
        paddingLeft: { xs: "0", sm: "50px" }  //  padding for desktop view
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "900px" },
          maxWidth: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#444444",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: { 
              xs: "1.6",
              sm: "1.5" 
            },
            textAlign: { xs: "justify", sm: "left" },
            display: "block",
            width: "100%",
            hyphens: { xs: "auto", sm: "none" },
            letterSpacing: { xs: "0.5px", sm: "normal" },
            wordSpacing: { xs: "1px", sm: "normal" },
            paddingRight: { xs: "8px", sm: "0" },
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "193.24px", sm: "193.24px" },
          height: { xs: "45px", sm: "55.56px" },
          backgroundColor: "#3E4C66",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "14px", sm: "17.78px" },
            fontWeight: 500,
          }}
        >
          Get Started!
        </Typography>
      </Box>
    </Box>
  );
};

export default function HeroSection() {
  const [content] = React.useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: "2500px" },
        height: { xs: "auto", sm: "431px" },
        backgroundColor: "#F7F7F7",
        borderRadius: { xs: "8px", sm: "11.11px" },
        padding: { xs: "16px", sm: "24px", md: "32px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        position: "relative",
        margin: "auto",
        gap: { xs: "24px", sm: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <HeroContent text={content} />
      </Box>

      <Box
        sx={{
          position: { xs: "static", sm: "absolute" },
          right: { sm: "120px" },  // Image left
          top: { sm: "50%" },
          transform: { sm: "translateY(-50%)" },
          width: { xs: "100%", sm: "335px" },
          height: { xs: "200px", sm: "335px" },
          maxWidth: { xs: "300px", sm: "335px" },
          margin: { xs: "24px auto 0", sm: 0 },
          display: { xs: "block", sm: "block" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/Images/Figure → Rent-Calculator.png"
            alt="Hero illustration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}


