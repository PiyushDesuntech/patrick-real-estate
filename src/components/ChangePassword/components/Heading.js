"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Heading() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
   <Box sx={{ py: 4, px: {xs: 1, sm: 3}}}>
     <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon sx={{fontSize: "10px"}}/>}>
      <MuiLink component={Link} href="/profile" underline="hover" color="inherit">
        My Profile
      </MuiLink>
      <Typography color="text.primary">
        Change Password
      </Typography>
    </Breadcrumbs>
   </Box>
  );
}

export default Heading;