import React, { useState } from "react";
import {
  Button,
  FormLabel,
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "../../utils/MUI";
import AllProductsGrid from "../../components/admin/allproducts/AllProductsGrid";

const AllMessages = () => {
  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h3">
            All Messages
          </Typography>
        </Box>
      </Box>
      <Box>
        <AllProductsGrid />
      </Box>
    </Box>
  );
};

export default AllMessages;
