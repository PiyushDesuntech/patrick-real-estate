import React from "react";
import WelcomeOnboard from "./components/WelcomeOnboard";
import { Box, Container } from "@mui/material";
import Buyers from "./components/Buyers";
import HomeIndex from "../Home/HomeIndex";
import TrialPack from "./components/TrialPack";

export default function WelcomeIndex() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{px: {lg: 7, xs: 1}, mt: 3}}>
        <WelcomeOnboard />
        <Buyers/>
        {/* <HomeIndex/> */}
        <TrialPack/>
      </Container>
    </Box>
  );
}
