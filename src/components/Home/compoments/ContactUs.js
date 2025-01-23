import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  Container,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 }, mt: "90px" }}>
      <Box
        sx={
          {
            // p: 4,
            // maxWidth: 800,
            // mx: "auto",
          }
        }
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 500, fontSize: "40px" }}
        >
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2} sx={{ mb: "50px" }}>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 1, fontSize: "22px", fontWeight: 500 }}>
                First Name{" "}
                <Typography component="span" color="error">
                  *
                </Typography>
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
                fullWidth
                required
                placeholder="Enter Your First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 1, fontSize: "22px", fontWeight: 500 }}>
                Last Name
              </Typography>
              <TextField
               sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
              }}
                fullWidth
                placeholder="Enter Your Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ mb: 1, fontSize: "22px", fontWeight: 500 }}>
                Phone Number
              </Typography>
              <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
              }}
                fullWidth
                placeholder="Enter Your Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 1, fontSize: "22px", fontWeight: 500 }}>
                Email Address{" "}
                <Typography component="span" color="error">
                  *
                </Typography>
              </Typography>
              <TextField
               sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
              }}
                fullWidth
                required
                placeholder="Enter Your Email Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mb: 1, fontSize: "22px", fontWeight: 500 }}>
                How Can We Help You?
              </Typography>
              <TextField
               sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
              }}
                fullWidth
                placeholder="Message..."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "16px", color: "#585858" }}
                  >
                    By checking this box I consent to receiving text messages
                    from Colonial Realty. Reply STOP to opt-out.{" "}
                    <Link
                      href="#"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#585858",
                        textDecoration: "underlien",
                        textDecorationColor: "#585858",
                        textUnderlineOffset: "2px",
                        pl: 1,
                      }}
                    >
                      Privacy Policy
                    </Link>{" "}
                    |{" "}
                    <Link
                      href="#"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#585858",
                        textDecoration: "underlien",
                        textDecorationColor: "#585858",
                        textUnderlineOffset: "2px",
                      }}
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "#fff",
                    boxShadow: "none",
                  },
                  color: "#000",
                  mr: -1.7,
                  width: "fit-content",
                  textTransform: "none",
                  boxShadow: "none",
                  height: "48px",
                  width: "114px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactUs;
