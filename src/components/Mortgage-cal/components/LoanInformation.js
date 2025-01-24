"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function LoanInformation() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F8F9FA",
        padding: { xs: "16px", sm: "32px", md: "40px" },
        ml:{xs: "9px", sm: "-5px", md: "-3px"},
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid item xs={12} sm={7.5}>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "24px" },
              fontWeight: "600",
              color: "#314259",
              marginBottom: "24px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            What is Loan Against Property EMI?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              color: "#314259",
              lineHeight: "2",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "24px"
            }}
          >
            The loan against property is secured against an asset such as a
            residential house or a commercial premise. The loan against property
            EMIs are made up of both, the principal and the interest portions.
            The pledged asset remains as collateral with the lender until you
            repay the total loan against the property amount. The loan against
            property interest rates are lower as compared to an unsecured loan
            such as a personal loan. The loan against property has no end-use
            restrictions, and you may use the loan for individual needs. The loan
            against property is also called the mortgage loan as it is secured
            against immovable property. The calculation of the loan against the
            property schedule is based on amortization. The interest component
            would constitute a larger part of the EMIs during the initial stages
            as compared to the principal portion. However, as you continue
            repaying the EMIs, the interest portion reduces, and the principal
            component of your EMI goes up. The total value of the loan against
            property EMI will remain constant across the tenure of the loan.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7.5}>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "24px" },
              fontWeight: "600",
              color: "#314259",
              marginBottom: "24px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            What is the Loan Against Property EMI Calculator?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              color: "#314259",
              lineHeight: "2",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "24px"
            }}
          >
            The loan against property EMI calculator is a utility tool that shows
            the loan against property EMIs you must pay the lender every month.
            If you enter the loan amount, the rate of interest, and the tenure of
            the loan, the loan against property EMI calculator will show the
            monthly EMI in seconds. The loan against property EMI calculator
            consists of a formula box and three sliders showing the loan amount,
            duration, and the rate of interest. After you fill in the details,
            the calculator will display the EMI amount that you must pay the
            lender every month, to repay the loan against the property.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}