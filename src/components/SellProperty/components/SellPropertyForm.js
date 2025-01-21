"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const SellPropertyForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [openDialog, setOpenDialog] = useState(false);

  const onSubmit = (data) => {
    console.log('data :>> ', data);
    const { yearBuilt, bedrooms, bathrooms, expectedPrice } = data;
    if (yearBuilt && bedrooms && bathrooms && expectedPrice) {
      setOpenDialog(true); // Open dialog if all required fields are filled
    }
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4, p: 3, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Let’s Verify Some Home Facts
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Nulla malesuada velit ac commodo porta. Sed vulputate purus vitae vulputate fringilla.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Finished Sq. Ft. (optional)"
              fullWidth
              {...register("finishedSqFt")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Lot Size (optional)"
              fullWidth
              InputProps={{
                endAdornment: <Typography variant="body2">Sq. Ft.</Typography>,
              }}
              {...register("lotSize")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Year Built"
              fullWidth
              {...register("yearBuilt", { required: "Year Built is required" })}
              error={!!errors.yearBuilt}
              helperText={errors.yearBuilt?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bedrooms"
              fullWidth
              {...register("bedrooms", { required: "Bedrooms are required" })}
              error={!!errors.bedrooms}
              helperText={errors.bedrooms?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bathrooms"
              fullWidth
              {...register("bathrooms", { required: "Bathrooms are required" })}
              error={!!errors.bathrooms}
              helperText={errors.bathrooms?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected Price"
              fullWidth
              {...register("expectedPrice", { required: "Expected Price is required" })}
              error={!!errors.expectedPrice}
              helperText={errors.expectedPrice?.message}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button type="submit" variant="contained" sx={{ px: 4 }}>
            Continue
          </Button>
        </Box>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Details</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to submit these details?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SellPropertyForm;
