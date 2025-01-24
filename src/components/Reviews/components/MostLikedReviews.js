import React from "react";
import Image from "next/image";
import { Box, Typography, Grid, Card, Button } from "@mui/material";

const reviews = [
  {
    id: 1,
    name: "John Thomas",
    review: "Suspendisse vitae nibh congue dolor vehicula malesuada non eget.",
    avatar: "/Images/image.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Hertz",
    review: "Suspendisse vitae nibh congue dolor vehicula malesuada non eget.",
    avatar: "/Images/image (2).png",
    rating: 5,
  },
  {
    id: 3,
    name: "Thomas Rolls",
    review: "Suspendisse vitae nibh congue dolor vehicula malesuada non eget.",
    avatar: "/Images/image (3).png",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <Box
    sx={{
      position: "absolute",
      top: "4px", // Reduced from 6px
      right: "20px", // Reduced from 25px
      display: "flex",
      alignItems: "center",
      '@media (max-width: 600px)': {
        position: "static",
        marginTop: "5px",
      }
    }}
  >
    <Typography
      variant="body2"
      sx={{
        color: "#FFB903",
        display: "flex",
        gap: "1px", // Reduced from 2px
        fontSize: "14px", // Reduced from 16px
        '@media (max-width: 600px)': {
          fontSize: "12px", // Reduced from 14px
        }
      }}
    >
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>★</span>
      ))}
    </Typography>
  </Box>
);

const ReviewCard = ({ name, review, avatar, rating }) => (
  <Card
    sx={{
      display: "flex",
      alignItems: "center",
      padding: "10px", // Reduced from 12px
      gap: "10px", // Reduced from 12px
      borderRadius: "8px", // Reduced from 10px
      width: "100%", 
      maxWidth: "400px", // Reduced from 420px
      height: "110px", // Reduced from 125px
      position: "relative",
      boxShadow: "none",
      margin: "0 auto",
      '@media (max-width: 600px)': {
        flexDirection: "column",
        height: "auto",
        padding: "10px",
        alignItems: "center",
        marginLeft: "18px", // Reduced from 16px
        marginRight: "16px", // Reduced from 16px
        width: "calc(100% - 28px)", // Adjusted
      }
    }}
  >
    <Box
      sx={{
        width: 48, // Reduced from 56
        height: 48, // Reduced from 56
        marginTop: "-40px", // Adjusted
        marginRight: "10px", // Reduced from 12px
        position: "relative",
        borderRadius: "50%",
        overflow: "hidden",
        '@media (max-width: 600px)': {
          marginTop: "-35px", // Adjusted
          width: 70, // Reduced from 80
          height: 70, // Reduced from 80
          marginRight: "0",
          marginBottom: "8px", // Reduced from 10px
          position: "relative",
          top: "30px", // Adjusted
        }
      }}
    >
      <Image
        src={avatar}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </Box>
    <Box sx={{ 
      flex: 1, 
      display: "flex", 
      flexDirection: "column", 
      height: "115px", // Reduced from 130px
      '@media (max-width: 600px)': {
        height: "auto",
        width: "100%",
        alignItems: "center",
      }
    }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px", // Reduced from 15px
          position: "relative",
          marginTop: "8px", // Reduced from 10px
          top: "4px", // Reduced from 5px
          '@media (max-width: 600px)': {
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "8px", // Reduced from 10px
            width: "100%",
            gap: "4px", // Reduced from 5px
          }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px", // Reduced from 20px
            fontWeight: "500",
            color: "#484848",
            '@media (max-width: 600px)': {
              fontSize: "16px", // Reduced from 18px
              marginBottom: "0",
              textAlign: "center",
            }
          }}
        >
          {name}
        </Typography>
        <StarRating rating={rating} />
      </Box>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        '@media (max-width: 600px)': {
          alignItems: "center",
          width: "100%",
        }
      }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px", // Reduced from 18px
            fontWeight: "400",
            color: "#484848",
            opacity: 0.6,
            textAlign: "left",
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            '@media (max-width: 600px)': {
              fontSize: "12px", // Reduced from 14px
              textAlign: "center",
            }
          }}
        >
          {review}
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default function MostLikedReviews() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "420px", // Reduced from 450px
        margin: "auto", 
        textAlign: "left", 
        padding: "16px 10px", // Reduced from 20px 12px
        backgroundColor: "#f7f7f7",
        borderRadius: "6px", // Reduced from 8px
        boxShadow: "none",
        display: "flex", 
        flexDirection: "column",
        '@media (max-width: 600px)': {
          padding: "14px 1px", // Reduced from 16px 1px
        }
      }}
    >
        <Typography
          variant="h4"
          sx={{
            fontSize: "24px", // Reduced from 26px
            fontWeight: "500",
            color: "#484848",
            marginBottom: "25px", // Reduced from 30px
            textAlign: "left", 
            width: "100%", 
            maxWidth: "100%", 
            '@media (max-width: 600px)': {
              fontSize: "20px", // Reduced from 22px
              marginBottom: "18px", // Reduced from 20px
              textAlign: "center",
              paddingLeft: "22px", // Reduced from 25px
            }
          }}
        >
          Most Liked Reviews
        </Typography>
      <Grid container spacing={1} direction="column"> {/* Reduced from spacing={2} */}
        {reviews.map((review) => (
          <Grid item xs={12} key={review.id}>
            <ReviewCard
              name={review.name}
              review={review.review}
              avatar={review.avatar}
              rating={review.rating}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "16px", // Reduced from 20px
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "180px", // Reduced from 200px
            height: "44px", // Reduced from 48px
            borderRadius: "5px", // Reduced from 6px
            backgroundColor: "#E8E1C4",
            color: "#777777",
            fontWeight: "600",
            fontSize: "14px", // Reduced from 15px
            boxShadow: "none",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#E8E1C4",
            },
            '@media (max-width: 600px)': {
              width: "160px", // Reduced from 180px
              height: "42px", // Reduced from 45px
              fontSize: "13px", // Reduced from 14px
            }
          }}
        >
          View All Reviews
        </Button>
      </Box>
    </Box>
  );
};