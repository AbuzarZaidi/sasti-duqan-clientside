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
import AllUsersGrid from "../../components/admin/allusers/AllUsersGrid";

const AllUsers = () => {
    return (
        <Box
          sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
            <Box>
              <Typography variant="h4" component="h3">
                All Users
              </Typography>
            </Box>
          </Box>
          <Box>
            <AllUsersGrid />
          </Box>
        </Box>
      );
}

export default AllUsers