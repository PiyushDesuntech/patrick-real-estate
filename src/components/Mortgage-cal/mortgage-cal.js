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
        maxWidth="xl"
        sx={{
          padding: { xs: "48px 16px", md: "48px 32px" },
        }}
      >
        {/* Page Heading */}
        <Box sx={{ marginBottom: { xs: 3, md: 4 } }}>
          <Heading />
        </Box>

        {/* Main Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(600px, 2fr) minmax(300px, 1fr)"
            },
            gap: { xs: 3, md: 4 },
            marginBottom: { xs: 4, md: 6 }
          }}
        >
          {/* Left Column: Loan Amount */}
          <Box>
            <LoanAmount />
          </Box>

          {/* Right Column: Calculator and Advanced Search */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3
            }}
          >
            <LoanCalculator />
            <Box sx={{ marginLeft: { xs: "24px", md: 0 } }}>
              <AdvancedSearch />
            </Box>
          </Box>
        </Box>

        {/* Loan Information Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "calc(100% - 130px)" },
            marginTop: { xs: 4, md: -13 },
            marginLeft: { xs: 0, md: "70px" },
            paddingRight: { md: "45px" }
          }}
        >
          <LoanInformation />
        </Box>
      </Container>
    </Box>
  );
}