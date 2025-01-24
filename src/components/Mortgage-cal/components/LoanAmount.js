"use client";
import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LoanAmount() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [duration, setDuration] = useState(10);
  const [borderRadius, setBorderRadius] = useState("0 8px 8px 0");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBorderRadius(window.innerWidth < 600 ? "0 0 4px 4px" : "0 8px 8px 0");
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "355px", sm: "400px", md: "680px" },
        height: { xs: "auto", sm: "auto", md: "450px" },
        minHeight: { xs: "470px", md: "350px" },
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: { xs: "15px", sm: "25px", md: "48px" },
        boxShadow: "0px 6px 24px rgb(230, 230, 230)",
        margin: "auto",
      }}
    >
      <Box sx={{ marginBottom: { xs: "20px", sm: "40px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "590",
            color: "#314259",
            marginBottom: "16px",
          }}
        >
          What Is The Amount Of Loan You Want To Borrow?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: "600",
              color: "#314259",
              backgroundColor: "#EEEEEE",
              width: { xs: "100%", sm: "48px" },
              minHeight: { xs: "40px", sm: "48px", md: "47px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: {
                xs: "4px 4px 0 0",
                sm: "8px 0 0 8px",
              },
              border: "1px solid #E0E7EB",
              borderBottom: { xs: "none", sm: "1px solid #E0E7EB" },
            }}
          >
            ₹
          </Typography>
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
              borderRadius: borderRadius,
              outline: "none",
              color: "#314259",
              boxSizing: "border-box",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ marginBottom: { xs: "20px", sm: "40px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "500",
            color: "#314259",
            marginBottom: "16px",
          }}
        >
          Rate Of Interest (P.A)
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Slider
            value={interestRate}
            onChange={(event, value) => setInterestRate(value)}
            sx={{
              flex: 1,
              color: "#E1E5EE",
              height: 8,
              "& .MuiSlider-rail": {
                backgroundColor: "#E1E5EE",
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
              padding: "20px 35px",
              borderRadius: "4px",
              border: "1px solid #E1E5EE",
              display: "flex",
              alignItems: "center",
              position: "relative",
              minWidth: "140px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography sx={{ color: "#314259", position: "absolute", left: "10px" }}>
              {interestRate}
            </Typography>
            <Typography sx={{ color: "#314259", position: "absolute", right: "10px" }}>
              %
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "500",
            color: "#314259",
            marginBottom: "16px",
          }}
        >
          Duration Of The Loan
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Slider
            value={duration}
            onChange={(event, value) => setDuration(value)}
            sx={{
              flex: 1,
              color: "#E1E5EE",
              height: 8,
              "& .MuiSlider-rail": {
                backgroundColor: "#E1E5EE",
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
              padding: "20px 35px",
              borderRadius: "4px",
              border: "1px solid #E1E5EE",
              display: "flex",
              alignItems: "center",
              position: "relative",
              minWidth: "140px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography sx={{ color: "#314259", position: "absolute", left: "12px" }}>
              {duration}
            </Typography>
            <Typography sx={{ color: "#314259", position: "absolute", right: "12px" }}>
              Years
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}