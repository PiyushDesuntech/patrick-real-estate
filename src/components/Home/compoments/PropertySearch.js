"use client";
import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  TextField,
  Button,
  Autocomplete,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";

const PropertySearch = () => {
  const [selectedTab, setSelectedTab] = useState("rent");
  const router = useRouter();

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  const handleClick = () => {
    router.push("/sell");
  };

  // Sample options for Autocomplete fields
  const propertyTypes = ["House", "Apartment", "Studio", "Villa"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
  const priceRange = ["1000-2000", "2000-5000"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: { xs: "0 5px 5px 5px" },
        mt: { xs: 0, sm: 6, md: 11, lg: -2 },
      }}
    >
      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleTabChange}
        sx={{
          display: "flex",
          gap: 0,
        }}
      >
        <Box>
          <ToggleButton
            value="rent"
            sx={{
              position: "relative",
              backgroundColor: selectedTab === "rent" ? "#E8E1C4" : "white",
              color: selectedTab === "rent" ? "black" : "#3E4C66",
              textTransform: "none",
              flex: 1,
              padding: "12px 26px",
              border: "none",
              borderRadius: "8px 8px 8px 8px",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8E1C4",
                color: "black",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "white",
                },
              },
              "&::after": selectedTab === "rent" && {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #E8E1C4",
              },
            }}
          >
            Rent
          </ToggleButton>
        </Box>
        <Box>
          <ToggleButton
            value="buy"
            sx={{
              position: "relative",
              backgroundColor: selectedTab === "buy" ? "#E8E1C4" : "white",
              color: selectedTab === "buy" ? "black" : "#3E4C66",
              textTransform: "none",
              flex: 1,
              padding: "12px 26px",
              border: "none",
              borderRadius: "8px 8px 8px 8px",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8E1C4",
                color: "black",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "white",
                },
              },
              "&::after": selectedTab === "buy" && {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #E8E1C4",
              },
            }}
          >
            Buy
          </ToggleButton>
        </Box>
        <Box>
          <Button
            onClick={handleClick}
            sx={{
              // position: "relative",
              backgroundColor: "white",
              color: "#3E4C66",
              textTransform: "none",
              flex: 1,
              padding: "12px 26px",
              border: "none",
              borderRadius: "0px 8px 8px 0px",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8E1C4",
                color: "black",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "white",
                },
              },
            }}
          >
            Sell
          </Button>
        </Box>
      </ToggleButtonGroup>
      <Box
        sx={{
          p: { xs: "10px", sm: "20px" },
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          maxWidth: { xs: "300px", sm: "1193px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: { xs: "10px", sm: "20px" },
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: "15px",
            width: "100%",
            maxWidth: { xs: "280px", sm: "1193px" },
          }}
        >
          {selectedTab === "buy" && (
            <Box
              sx={{
                display: "flex",
                flexWrap: { xs: "wrap", sm: "unset" },
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "unset" },
              }}
            >
              <TextField
                label="City, Neighborhood, Zip, School, Keyword"
                variant="outlined"
                fullWidth
                sx={{
                  width: { xs: "250px", md: "369px" },
                  maxWidth: "369px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#3E4C66",
                  "& .MuiInputLabel-root": {
                    color: "#3E4C66",
                    fontSize: "14px",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#3E4C66",
                    fontSize: "14px",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: { xs: "40px", sm: "50px" }, 
                    "& .MuiInputBase-input": {
                      padding: { xs: "5px", sm: "14px" }, 
                    },
                    borderRadius: "4px", 
                    "& fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                    "&:hover fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                  },
                }}
              />
              <Autocomplete
                options={locations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Min Baths"
                    variant="outlined"
                    sx={{
                      minWidth: { xs: "250px", sm: "193px" }, // Smaller width for xs
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#3E4C66",
                      "& .MuiInputLabel-root": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", sm: "50px" }, 
                        "& .MuiInputBase-input": {
                          padding: { xs: "5px", sm: "14px" }, 
                        },
                        borderRadius: "4px", 
                        "& fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&:hover fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                      },
                    }}
                  />
                )}
                // fullWidth
              />
              <Autocomplete
                options={locations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Min Beds"
                    variant="outlined"
                    // sx={{ minWidth: "150px" }}
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#3E4C66",
                      "& .MuiInputLabel-root": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", sm: "50px" }, 
                        "& .MuiInputBase-input": {
                          padding: { xs: "5px", sm: "14px" }, 
                        },
                        borderRadius: "4px", 
                        "& fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&:hover fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                      },
                      minWidth: { xs: "250px", sm: "193px" },
                    }}
                  />
                )}
                // fullWidth
              />
              <Autocomplete
                options={locations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Max Price"
                    variant="outlined"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#3E4C66",
                      "& .MuiInputLabel-root": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", sm: "50px" }, 
                        "& .MuiInputBase-input": {
                          padding: { xs: "5px", sm: "14px" }, 
                        },
                        borderRadius: "4px", 
                        "& fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&:hover fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                      },
                      minWidth: { xs: "250px", sm: "159px" },
                    }}
                  />
                )}
              />
            </Box>
          )}
          {selectedTab === "rent" && (
            <Box
              sx={{
                display: "flex",
                flexWrap: { xs: "wrap", lg: "unset" },
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: { xs: "column", sm: "unset" },
              }}
            >
              <TextField
                label="City, Neighborhood, Zip, School, Keyword"
                variant="outlined"
                fullWidth
                sx={{
                  width: { xs: "250px", sm: "369px" },
                  maxWidth: "369px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#3E4C66",
                  "& .MuiInputLabel-root": {
                    color: "#3E4C66",
                    fontSize: "14px",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#3E4C66",
                    fontSize: "14px",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: { xs: "40px", sm: "50px" }, 
                    "& .MuiInputBase-input": {
                      padding: { xs: "5px", sm: "14px" }, 
                    },
                    borderRadius: "4px", 
                    "& fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                    "&:hover fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#DCDCDC", 
                    },
                  },
                }}
              />
              <Autocomplete
                options={["Apartment", "Studio", "Shared"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Earliest Move Date"
                    variant="outlined"
                    sx={{
                      minWidth: { xs: "250px", sm: "163px" },
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#3E4C66",
                      "& .MuiInputLabel-root": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", sm: "50px" }, 
                        "& .MuiInputBase-input": {
                          padding: { xs: "5px", sm: "14px" }, 
                        },
                        borderRadius: "4px", 
                        "& fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&:hover fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                      },
                    }}
                  />
                )}
                // fullWidth
              />
              <Autocomplete
                options={locations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Latest Move Date"
                    variant="outlined"
                    sx={{
                      minWidth: { xs: "250px", sm: "163px" },
                      fontSize: "14px",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#3E4C66",
                      "& .MuiInputLabel-root": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#3E4C66",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "40px", sm: "50px" }, 
                        "& .MuiInputBase-input": {
                          padding: { xs: "5px", sm: "14px" }, 
                        },
                        borderRadius: "4px", 
                        "& fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&:hover fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#DCDCDC", 
                        },
                      },
                    }}
                  />
                )}
                // fullWidth
              />
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Min Beds"
                      variant="outlined"
                      // sx={{ minWidth: "150px" }}
                      sx={{
                        fontSize: "14px",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#3E4C66",
                        "& .MuiInputLabel-root": {
                          color: "#3E4C66",
                          fontSize: "14px",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#3E4C66",
                          fontSize: "14px",
                        },
                        "& .MuiOutlinedInput-root": {
                          height: { xs: "40px", sm: "50px" }, 
                          "& .MuiInputBase-input": {
                            padding: { xs: "5px", sm: "14px" }, 
                          },
                          borderRadius: "4px", 
                          "& fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                        },
                        minWidth: { xs: "115px", sm: "102px" },
                      }}
                    />
                  )}
                  // fullWidth
                />
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Max Price"
                      variant="outlined"
                      sx={{
                        fontSize: "14px",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#3E4C66",
                        "& .MuiInputLabel-root": {
                          color: "#3E4C66",
                          fontSize: "14px",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#3E4C66",
                          fontSize: "14px",
                        },
                        "& .MuiOutlinedInput-root": {
                          height: { xs: "40px", sm: "50px" }, 
                          "& .MuiInputBase-input": {
                            padding: { xs: "5px", sm: "14px" }, 
                          },
                          borderRadius: "4px", 
                          "& fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#DCDCDC", 
                          },
                        },
                        minWidth: { xs: "115px", sm: "102px" },
                      }}
                    />
                  )}
                />
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E0D8C3",
              "&:hover": {
                backgroundColor: "#3E4C66",
                color: "#fff",
                boxShadow: "none",
              },
              color: "#464646",
              minWidth: "135px",
              height: { xs: "40px", sm: "50px" },
              boxShadow: "none",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertySearch;
