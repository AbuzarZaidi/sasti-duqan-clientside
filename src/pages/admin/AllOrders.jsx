import React, { useState, useEffect } from "react";
import {
  getAllOrders
} from "../../functions/admin/orders";
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
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllOrders();
      // console.log(result);
      if (result.data.length > 0) {
        setOrders(result.data);
        console.log(result.data);
      }
    };
    fetchData();
  }, []);
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
            <AllOrdersGrid rows={orders}/>
          </Box>
        </Box>
      );
}

export default AllOrders