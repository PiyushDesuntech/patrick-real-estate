import React from "react";
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button, Grid } from "@mui/material";

const ReviewForm = () => {
  const handleClick = () => {
    alert("Link clicked!");  // Replace this with actual navigation logic if needed
    // Example: const navigate = useNavigate();
    // navigate('/other-page');
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px", // Reduced from 870px
        margin: "auto",
        textAlign: "left",
        padding: "20px 14px", // Slightly reduced
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        boxShadow: "none",
        '@media (max-width: 600px)': {
          padding: "16px 1px",
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  fontSize: "18px", // Reduced from 20px
                  fontWeight: "400",
                  color: "#777777",
                }}
              >
                Praesent tristique auctor tristi dictum. Donec effe elegestas urna.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="flex-end" alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#FFB903", fontSize: "25px" }}>★</span> // Reduced from 29px
                ))}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "25px", // Reduced from 27.89px
                    fontWeight: "400",
                    color: "#484848",
                    marginLeft: "8px",
                  }}
                >
                  5.0
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              fontSize: "18px", // Reduced from 20px
              fontWeight: "400",
              color: "#777777",
              marginBottom: "12px", // Reduced from 16px
            }}
          >
            Maecenas dictum sem eget urna fermentum, eget congue arcu finibusaesent imperdiet.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Suspendisse vitae nibh congue dolo..."
            multiline
            rows={12}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              height: "310px", // Reduced from 310px
              marginBottom: "12px", // Reduced from 16px
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              fontSize: "26px", // Reduced from 30px
              fontWeight: "400",
              color: "#484848",
              marginBottom: "20px", // Reduced from 30px
            }}
          >
            Complete Address:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Enter Address Here..."
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              marginBottom: "12px", // Reduced from 16px
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px", // Reduced from 16px
              color: "#777777",
              marginBottom: "6px", // Reduced from 8px
            }}
          >
            Maecenas dictum sem eget urna fermentum.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px", // Reduced from 16px
                    color: "#777777",
                  }}
                >
                  Sed gravida neque eget tellus dignissim hendrerit.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px", // Reduced from 16px
                    color: "#1E22EC",
                    marginLeft: "4px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleClick}
                >
                  Praesent nulla magna.
                </Typography>
              </Box>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              width: "240px", // Reduced from 275px
              height: "48px", // Reduced from 53px
              borderRadius: "4px",
              backgroundColor: "#E8E1C4",
              color: "#777777",
              fontWeight: "400",
              fontSize: "15px", // Reduced from 16px
              boxShadow: "none",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E8E1C4",
              },
              '@media (max-width: 600px)': {
                width: "100%",
                height: "45px",
                fontSize: "14px",
              }
            }}
          >
            Submit Review
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;