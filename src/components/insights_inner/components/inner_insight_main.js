"use client";
import React from "react";
import { Box, Typography, Avatar, Button,Divider,TextField, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Pinterest, MoreHoriz } from "@mui/icons-material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from 'next/image';

const Main = () => {
  return (


    <Box
      sx={{
        padding: 4,
        backgroundColor: "transparent",
        borderRadius: "8px",
      }}
    >
      <Typography
       
        sx={{ 
            fontWeight: 600, marginBottom: 2, color: "#333" }}
      >
        Housing Markets That Changed the Most This Decade
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          gap: 2,
        }}
      >
        <Avatar
          src="https://via.placeholder.com/150"
          alt="Author"
        />
        <Typography sx={{ fontSize: "14px", color: "#777" }}>
          Admin | February 16, 2023 | 0 Comments
        </Typography>
      </Box>
  <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src="/images/Popular1.svg"
                alt="Allston"
                layout="responsive"
                width={650}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>

      <Typography sx={{ Font:"Nunito", fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
      </Typography>

      <Typography sx={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: 3 }}>
        Vestibulum ac elit est. Phasellus vehicula nisl in nunc venenatis, nec congue nisi mollis...
      </Typography>

      <Typography
        
        sx={{ fontWeight: 600, marginBottom: 2, color: "#333" }}
      >
        A New Era for Housing
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: 3 }}>
        As we enter a new decade, housing markets worldwide are undergoing major transformations. New trends are emerging that will shape the future of the real estate industry.
      </Typography>

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: 3,
          borderRadius: "8px",
          marginBottom: 3,
          border: "1px solid #ddd",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#333",
            fontStyle: "italic",
            marginBottom: 2,
          }}
        >
          "The future of housing is not just about physical spaces; it's about
          creating environments that foster community and well-being."
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#777" }}>
          - Housing Expert
        </Typography>
      </Box>

      <Typography
        sx={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginTop: 3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        faucibus odio. Praesent a pharetra velit. Vivamus sit amet sapien ac
        eros volutpat ultrices. Curabitur blandit lectus nec lorem sagittis, in
        luctus lectus cursus. Ut eget bibendum augue. Cras bibendum facilisis
        magna at volutpat.
      </Typography>

      
      <Divider sx={{ marginY: 3 }} />


      {/* Share and Tags Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        {/* Share Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
          
            sx={{ fontWeight: 600, color: "#333", marginRight: 2 }}
          >
            Share Link
          </Typography>
          <IconButton
            component="a"
            href="#"
            aria-label="Share on Facebook"
            sx={{ color: "#3b5998" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            aria-label="Share on Twitter"
            sx={{ color: "#1da1f2" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            aria-label="Share on LinkedIn"
            sx={{ color: "#0077b5" }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            aria-label="Share on Pinterest"
            sx={{ color: "#bd081c" }}
          >
            <Pinterest />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            aria-label="More options"
            sx={{ color: "#333" }}
          >
            <MoreHoriz />
          </IconButton>
        </Box>

        {/* Tags */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Typography
            sx={{ fontWeight: 600, color: "#333", marginRight: 1 }}
          >
            Tags:
          </Typography>
          {["Apartment", "Real"].map((tag, index) => (
            <Box
              key={index}
              sx={{
                padding: "4px 8px",
                backgroundColor: "#e3e3e3",
                borderRadius: "4px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
{/* Pagination Section */}
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    paddingY: 3,
    borderTop: "1px solid #ddd",
  }}
>
  {/* Previous Section */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          backgroundColor: "#ddd",
          borderRadius: "50%",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBack sx={{ color: "#777" }} />
      </Box>
      <Typography
        sx={{
          color: "#007bff",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "none",
          cursor: "pointer",
          "&:hover": { color: "#0056b3" },
        }}
      >
        Prev
      </Typography>
    </Box>
    <Typography
      sx={{
        color: "#777",
        fontSize: "14px",
        marginTop: 1,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </Box>

  {/* Next Section */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography
        sx={{
          color: "#007bff",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "none",
          cursor: "pointer",
          "&:hover": { color: "#0056b3" },
        }}
      >
        Next
      </Typography>
      <Box
        sx={{
          backgroundColor: "#ddd",
          borderRadius: "50%",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowForward sx={{ color: "#777" }} />
      </Box>
    </Box>
    <Typography
      sx={{
        color: "#777",
        fontSize: "14px",
        marginTop: 1,
        textAlign: "right",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </Box>
</Box>

<Divider sx={{ marginY: 3 }} />


{/* comment section */}
<Box
  sx={{
    padding: 3,
 
   
    marginBottom: 3,
   
  }}
>
  <Typography
 
    sx={{
      fontWeight: 600,
      marginBottom: 3,  // Increased spacing between title and input fields
      color: "#333",
    }}
  >
    Leave a Comment
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: 3, // Increased gap between name and email fields
      marginBottom: 3, // Increased spacing between inputs
    }}
  >
    {/* Name Input */}
    <TextField
      label="Name"
    
      fullWidth
      sx={{
        backgroundColor: "#fff",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
      }}
    />
    {/* Email Input */}
    <TextField
      label="Email"
     
      fullWidth
      sx={{
        backgroundColor: "#fff",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
      }}
    />
  </Box>

  <FormControlLabel
    control={<Checkbox />}
    label="Save my name and email in this browser for next time"
    sx={{
      marginBottom: 3, 
      color: "#555",
      fontSize: "14px",
    }}
  />

  <TextField
    label="Your Comment"
  
    fullWidth
    multiline
    rows={4}
    sx={{
      backgroundColor: "#fff",
      marginBottom: 3, 
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
      },
    }}
  />

  <Button
  
    sx={{
        backgroundColor: "#E8E1C4",
       width: "260.11px",
       height:"64px",
       top:"101.4px",
       radius: "7.38px",
       border: "1.23px",

    }}
  >
    Submit Comment
  </Button>
</Box>
      
    </Box>
  );
};

export default Main;
