import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function TrialPack() {
  return (
    <Box sx={{ maxWidth: "1323px", background: "#FAF8EE", borderRadius: "4px", border: "2px Dashed #BDB38B", mt: 5 }}>
      <Grid container spacing={2} sx={{p: 3}}>
        <Grid item xs={12} sm={12} md={9} sx={{display: "flex", flexDirection: "column", gap: 2}}>
          <Typography sx={{fontSize: "26px", fontWeight: 700, color: "#484848"}}>Buy a Trial Pack</Typography>
          <Typography>Get up to Rs, 12200 off Your First Purchase</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckIcon />
              <Typography >Get instant Visibility</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckIcon />
              <Typography>Get instant Visibility</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckIcon />
              <Typography>Get instant Visibility</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckIcon />
              <Typography>Get instant Visibility</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#747679",
              "&:hover": {
                backgroundColor: "#E0D8C3",
                color: "#000",
              },
              color: "#fff",
              minWidth: "173px",
              height: "50px",
              textTransform: "none",
            }}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
