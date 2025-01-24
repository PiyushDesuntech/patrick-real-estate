"use client";
import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const RentRange = ({ title, percentage, amount, isHighRange, isMidRange }) => {
  const amountColor = isHighRange ? "#F8BF16" : isMidRange ? "#073E7A" : "#061C35";

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderTop: {
            xs: title !== "High Range" ? "1px solid #E5E5E5" : "none",
            md: "none"
          },
          display: { xs: "block", md: "none" },
          mt: { xs: 3, md: 0 }
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          borderRight: {
            md: title !== "Low Range" ? "1px solid #E5E5E5" : "none",
          },
          paddingRight: {
            md: title !== "Low Range" ? "48px" : "0",
          },
          height: "100%",
          marginTop: { xs: 3, md: 0 },
          paddingTop: { xs: 0, md: "29px" },
          marginBottom: "16px",
          alignItems: { xs: "center", md: "flex-start" },
          maxWidth: { md: "350px" }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "24.44px" },
            fontWeight: "700",
            color: "#0A2540",
            textAlign: { xs: "center", md: "left" }
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: { xs: "16px", sm: "17.78px" },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          {percentage}% of Gross Income
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "44.44px" },
            fontWeight: "700",
            color: amountColor,
            mb: 2,
            textAlign: { xs: "center", md: "left" }
          }}
        >
          ${amount}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#E8E1C4",
            color: "#777777",
            width: { xs: "80%", sm: "172.8px" },
            height: { xs: "40px", sm: "43.33px" },
            borderRadius: "55.56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#EAEAE6"
            }
          }}
        >
          <Typography sx={{ fontSize: { xs: "14px", sm: "15.56px" } }}>
            View Apartments
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function RentCalculator() {
  const [income, setIncome] = React.useState(150000);

  const calculateRent = (percentage) => {
    return Math.floor((income * (percentage / 100)) / 12).toLocaleString();
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "900px", md: "1300px" },
        height: { xs: "auto", md: "431px" },
        backgroundColor: "#FFFFFF",
        borderRadius: { xs: "8px", sm: "11.11px" },
        padding: { xs: "16px", sm: "24px", md: "32px 32px 32px 24px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        margin: { xs: "auto", md: "0" }
      }}
    >
      <Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          mb: 2
        }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "flex-start" },
              position: "relative",
              borderBottom: { xs: "1px solid #E5E5E5", sm: "none" },
              pb: { xs: 3, sm: 0 }
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "37.33px" },
                  fontWeight: "700",
                  color: "#0A2540",
                  mb: { xs: "8px", sm: "0" }
                }}
              >
                Rent Calculator
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  fontSize: { xs: "14px", sm: "16px" },
                  mb: { xs: 2, sm: 0 }
                }}
              >
                How much do you (or your cosigner) earn each year before taxes?
              </Typography>
            </Box>
            <TextField
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              type="number"
              sx={{
                width: { xs: "100%", sm: "231.69px" },
                alignSelf: { xs: "stretch", sm: "flex-start" },
                mt: { xs: 0, sm: "20px" },
                position: { xs: "static", sm: "absolute" },
                top: { sm: "5px" },
                right: { sm: "500px" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "24px",
                  backgroundColor: "#F8F8F8",
                  height: "40px",
                  border: "1px solid #061C35",
                  boxShadow: "0px 0px 4px 0px #81C76F"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "& .MuiInputBase-input": {
                  padding: "8px 16px"
                }
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        borderTop: { sm: "1px solid #E5E5E5" },
        mt: { xs: 0, sm: 2 }
      }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr"
            },
            gap: { xs: "0", md: "40px" },
            maxWidth: { md: "1200px" }
          }}
        >
          <RentRange
            title="High Range"
            percentage={35}
            amount={calculateRent(35)}
            isHighRange={true}
          />
          <RentRange
            title="Mid Range"
            percentage={25}
            amount={calculateRent(25)}
            isMidRange={true}
          />
          <RentRange
            title="Low Range"
            percentage={15}
            amount={calculateRent(15)}
            isHighRange={false}
          />
        </Box>
      </Box>
    </Box>
  );
}