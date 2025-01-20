import { Box, Button, Container } from "@mui/material";
import React from "react";
import SellHeading from "./components/SellHeading";
import SellYourHome from "./components/SellYourHome";
import MostExperience from "./components/MostExperience";
import OurAgents from "../AboutUs/components/OurAgents";
import HomeIndex from "../Home/HomeIndex";
import MoreWays from "./components/MoreWays";
import WhyChooseUs from "./components/WhyChooseUs";
import ReadyToSell from "./components/ReadyToSell";

export default function SellIndex() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, lg: 6 } }}>
      <SellHeading />
      <SellYourHome />
      <MostExperience />
      <OurAgents />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            backgroundColor: "#E8E1C4",
            "&:hover": {
              backgroundColor: "#4D4D4D",
              color: "#fff",
            },
            color: "#717171",
            borderRadius: "8px",
            textTransform: "none",
            px: { xs: 2, sm: 2, md: 5, lg: "40px" },
            py: "10px",
            m: 2,
            fontSize: "19.69px",
            fontWeight: 700, 
          }}
        >
          Find More Agents
        </Button>
      </Box>
      <MoreWays/>
      <WhyChooseUs/>
      <ReadyToSell/>
    </Container>
  );
}
