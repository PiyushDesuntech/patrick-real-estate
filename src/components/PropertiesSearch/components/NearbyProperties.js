import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const properties = [
  {
    image: "/Images/nearby1.svg", 
    title: "Diamond Manor",
    price: "$6500",
    beds: 4,
    baths: 2,
    sqft: 150,
  },
  {
    image: "/Images/nearby2.svg",
    title: "Eaton Garth Penthouse",
    price: "$7500",
    beds: 4,
    baths: 1,
    sqft: 220,
  },
  {
    image: "/Images/nearby3.svg",
    title: "Skyper Pool Apartment",
    price: "$1200/mo",
    beds: 3,
    baths: 2,
    sqft: 110,
  },
  {
    image: "/Images/nearby4.svg",
    title: "North Dillard Street",
    price: "$5500",
    beds: 4,
    baths: 1,
    sqft: 120,
  },
];

const PropertyCard = ({ property }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: { xs: "row", sm: "row" },
      mb: 1,
      boxShadow: "none",
      alignItems: "center",
    }}
  >
    <CardMedia
      component="img"
      image={property.image}
      alt={property.title}
      sx={{ width: { xs: 60, sm: 100 }, height:  { xs: 60, sm: 100 } }}
    />
    <CardContent sx={{ flex: 1 }}>
      <Typography sx={{fontSize: {xs: "14px", md: "20px"}, fontWeight: 700, color: "#484848"}} noWrap>
        {property.title}
      </Typography>
      <Typography sx={{fontSize: {xs: "14px", md: "20px"}, fontWeight: 700, color: "#B3A87A"}}>{property.price}</Typography>
      <Typography sx={{fontSize: {xs: "12px", md: "17px"}, fontWeight: 700, color: "#B3A87A"}}>
        Beds: {property.beds} Baths: {property.baths} Sqft: {property.sqft}
      </Typography>
    </CardContent>
  </Card>
);

const NearbyProperties = () => (
  <Box p={3}>
    <Box  sx={{
        // width: "300px",
        padding: {xs: "20px", md: "30px"},
        borderRadius: "8px",
        // boxShadow: 1,
        border: "2px solid #D8D8D8",
        bgcolor: "background.paper",
      }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Nearby Properties
    </Typography>
    {properties.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
  </Box>
  </Box>
);

export default NearbyProperties;
