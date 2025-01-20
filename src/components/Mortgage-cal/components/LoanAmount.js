"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LoanAmount() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [duration, setDuration] = useState(10);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "80%", sm: "400px", md: "650px" },
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: { xs: "15px", sm: "25px", md: "48px" },
        boxShadow: "0px 4px 20px rgb(235, 235, 235)",
        margin: "auto",
      }}
    >
      {/* Loan Amount Section */}
      <Box sx={{ marginBottom: { xs: "20px", sm: "40px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "590",
            color: "#37474F",
            marginBottom: "16px",
          }}
        >
          What Is The Amount Of Loan You Want To Borrow?
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
          {/* Rupee Box */}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#37474F",
              backgroundColor: "#EEEEEE",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px 0 0 8px",
              border: "1px solid #E0E7EB",
              marginBottom: { xs: "10px", sm: "0" }, 
            }}
          >
            ₹
          </Typography>
          {/* Loan Amount Input */}
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            style={{
              width: "100%",
              height: "48px",
              padding: "8px 16px",
              fontSize: "16px",
              border: "1px solid #E0E7EB",
              borderRadius: "0 8px 8px 0",
              outline: "none",
              color: "#37474F",
              boxSizing: "border-box",
            }}
          />
        </Box>
      </Box>

      {/* Interest Rate Section */}
      <Box sx={{ marginBottom: { xs: "20px", sm: "40px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "500",
            color: "#37474F",
            marginBottom: "16px",
          }}
        >
          Rate Of Interest (P.A)
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: 2 }}>
          {/* Interest Rate Slider */}
          <Slider
            value={interestRate}
            onChange={(event, value) => setInterestRate(value)}
            sx={{
              flex: 1,
              color: "#E1E5EE",
              height: 8,
              "& .MuiSlider-rail": {
                backgroundColor: "#EDF2F7",
                height: 8,
              },
              "& .MuiSlider-track": {
                height: 4,
                backgroundColor: "#E1E5EE",
              },
              "& .MuiSlider-thumb": {
                width: 20,
                height: 20,
                backgroundColor: "#fff",
                border: "1px solid #1678FB",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0 0 0 6px #1678FB",
                },
              },
            }}
          />
          <Box
            sx={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #E1E5EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: "80px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography sx={{ color: "#37474F", left: "12px" }}>{interestRate}</Typography>
            <Typography sx={{ color: "#37474F", right: "12px" }}>%</Typography>
          </Box>
        </Box>
      </Box>

      {/* Loan Duration Section */}
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "500",
            color: "#37474F",
            marginBottom: "16px",
          }}
        >
          Duration Of The Loan
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: 2 }}>
          {/* Loan Duration Slider */}
          <Slider
            value={duration}
            onChange={(event, value) => setDuration(value)}
            sx={{
              flex: 1,
              color: "#E1E5EE",
              height: 8,
              "& .MuiSlider-rail": {
                backgroundColor: "#EDF2F7",
                height: 8,
              },
              "& .MuiSlider-track": {
                height: 4,
                backgroundColor: "#E1E5EE",
              },
              "& .MuiSlider-thumb": {
                width: 20,
                height: 20,
                backgroundColor: "#fff",
                border: "1px solid #1678FB",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0 0 0 6px #1678FB",
                },
              },
            }}
          />
          <Box
            sx={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #E1E5EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: "80px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography sx={{ color: "#37474F", left: "12px" }}>{duration}</Typography>
            <Typography sx={{ color: "#37474F", right: "12px" }}>Years</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
