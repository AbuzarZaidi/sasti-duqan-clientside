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
const AllProducts = () => {
  return (
    <Box  sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}>
        <Box sx={{display:"flex",justifyContent:"space-between",mb:2}}>
        <Box>
        <Typography variant="h4" component="h3">
          All Product
        </Typography>
      </Box>
      <Box>
      <Button variant="contained" sx={{ backgroundColor: "#FD8004" }}>
          New Product
        </Button>
      </Box>
        </Box>
<Box>
  <AllProductsGrid/>
</Box>
    </Box>
  )
};

export default AllProducts;
