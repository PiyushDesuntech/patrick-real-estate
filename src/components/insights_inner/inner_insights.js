"use client";

import Main from '@/components/insights_inner/components/inner_insight_main';
import Side from '@/components/insights_inner/components/inner_insight_side';
import { Box, Grid } from '@mui/material';
import Heading from './components/Heading';


export default function InnerInsights() {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
        <Heading/>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Main />
        </Grid>
        {/* Side Content */}
        <Grid item xs={12} md={4}>
          <Side />
        </Grid>
      </Grid>
    </Box>
  );
}
