import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./components/Heading";
import LoanCalculator from "./components/LoanCalculator";
import LoanAmount from "./components/LoanAmount";
import AdvancedSearch from "./components/AdvanceSearch";
import LoanInformation from "./components/LoanInformation";

export default function Mortgage() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
        }}
      >
        {/* Page Heading */}
        <Box
          sx={{
            ml: { xs: 0, md: -15 },
          }}
        >
          <Heading />
        </Box>

        {/* Main Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: { xs: 4, md: 3 },
            mt: 5,
          }}
        >
          {/* Left Column: Loan Amount */}
          <Box
            sx={{
              ml: { xs: 0, md: 3 },
            }}
          >
            <LoanAmount />
          </Box>

          {/* Right Column: LoanCalculator */}
          <Box>
            <Box
              sx={{
                ml: { xs: 0, md: 25 },
              }}
            >
              <LoanCalculator />
            </Box>

            <Box
              sx={{
                ml: { xs: 3, md: 25 },
                mt: 4,
              }}
            >
              <AdvancedSearch />
            </Box>
          </Box>
        </Box>

        {/* Loan Information Section */}
        <Box
          sx={{
            mt: { xs: 5, md: -7 },
            ml: { xs: 0, md: -2 }, 
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <LoanInformation />
        </Box>
      </Container>
    </Box>
  );
}
