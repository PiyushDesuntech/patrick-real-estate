import { Box, Container, Typography } from "@mui/material";
import Heading from "./components/Heading";
import TermsAndconditions from "./components/TermsAndconditions";
import JoinUs from "../Home/compoments/JoinUs";
export default function Terms_conditions() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Heading />
        <TermsAndconditions />
      </Container>
      <JoinUs />
    </Box>
  );
}
