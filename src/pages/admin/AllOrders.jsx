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
import AllOrdersGrid from "../../components/admin/allorders/AllOrdersGrid";

const AllOrders = () => {
    return (
        <Box
          sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
            <Box>
              <Typography variant="h4" component="h3">
                All Orders
              </Typography>
            </Box>
          </Box>
          <Box>
            <AllOrdersGrid />
          </Box>
        </Box>
      );
}

export default AllOrders