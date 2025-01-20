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
    cutout: "60%",
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
  };

  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
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
        maxWidth: { xs: "90%", sm: "400px", md: "400px" },
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: "7.38px",
        padding: { xs: "16px", sm: "20px 29px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 4px 20px rgb(235, 235, 235)",
        margin: "auto",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <LoanDoughnutChart
          principal={loanDetails.principal}
          interest={loanDetails.interest}
        />

        {/* Legend */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "12px",
            marginBottom: "16px",
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
            <Typography sx={{ color: "#484848", fontSize: "14px" }}>
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
            <Typography sx={{ color: "#484848", fontSize: "14px" }}>
              Interest
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Financial Details */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ebebeb",
            paddingBottom: "20px",
          }}
        >
          <Typography sx={{ color: "#484848", fontSize: "16px" }}>
            Monthly EMI Is
          </Typography>
          <Typography sx={{ color: "#484848", fontSize: "18px", fontWeight: "600" }}>
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
          }}
        >
          <Typography sx={{ color: "#484848", fontSize: "16px" }}>
            Total Amount Payable Is
          </Typography>
          <Typography sx={{ color: "#484848", fontSize: "18px", fontWeight: "600" }}>
            ₹{loanDetails.totalAmount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#484848", fontSize: "16px" }}>
            Interest Component
          </Typography>
          <Typography sx={{ color: "#484848", fontSize: "18px", fontWeight: "600" }}>
            ₹{loanDetails.interest.toLocaleString("en-IN")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
