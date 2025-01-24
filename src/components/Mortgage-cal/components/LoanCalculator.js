"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const LoanDoughnutChart = ({ principal, interest }) => {
  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [principal, interest],
        backgroundColor: ["#4ade80", "#E6E6FA"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw.toLocaleString("en-IN");
            return `₹${value}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "230px",
        height: "140px",
        margin: "0 auto",
        gap: "3px",
      }}
    >
      <Doughnut data={data} options={options} />
    </Box>
  );
};

export default function LoanCalculator() {
  const [loanDetails] = React.useState({
    principal: 100000,
    interest: 58581,
    monthlyEMI: 1322,
    totalAmount: 158581,
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: "500px", md: "500px" },
        height: "auto",
        ml:{sm: "-5px", md: "-10px"},
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: { xs: "24px", sm: "32px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 6px 24px rgb(230, 230, 230)",
        margin: "auto",
        "@media (min-width: 960px)": {
          height: "auto",
        },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <LoanDoughnutChart
          principal={loanDetails.principal}
          interest={loanDetails.interest}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "40px",
            marginBottom: "70px",
            marginLeft: { xs: "0", md: "16px" },
            marginRight: { xs: "0", md: "16px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                backgroundColor: "#4ade80",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ color: "#314259", fontSize: "12px" }}>
              Principal
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                backgroundColor: "#E6E6FA",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ color: "#314259", fontSize: "12px" }}>
              Interest
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ebebeb",
            paddingBottom: "20px",
            marginLeft: { xs: "0", md: "18px" },
            marginRight: { xs: "0", md: "18px" },
          }}
        >
          <Typography sx={{ color: "#314259", fontSize: "14px" }}>
            Monthly EMI Is
          </Typography>
          <Typography sx={{ color: "#314259", fontSize: "16px" }}>
            ₹{loanDetails.monthlyEMI.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ebebeb",
            paddingBottom: "20px",
            marginLeft: { xs: "0", md: "18px" },
            marginRight: { xs: "0", md: "18px" },
          }}
        >
          <Typography sx={{ color: "#314259", fontSize: "14px" }}>
            Total Amount Payable Is
          </Typography>
          <Typography sx={{ color: "#314259", fontSize: "16px" }}>
            ₹{loanDetails.totalAmount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: { xs: "0", md: "18px" },
            marginRight: { xs: "0", md: "18px" },
          }}
        >
          <Typography sx={{ color: "#314259", fontSize: "14px" }}>
            Interest Component
          </Typography>
          <Typography sx={{ color: "#314259", fontSize: "16px" }}>
            ₹{loanDetails.interest.toLocaleString("en-IN")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}