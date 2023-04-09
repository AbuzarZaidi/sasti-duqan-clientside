import React, { useState, useEffect } from "react";
import {
  getAllOrders,deleteOrder
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
  const deleteHandler = async (multiId) => {
   
    const result = await deleteOrder(multiId);
    console.log(result.result);
    const data = [];
    if (result.result) {
      const filteredOrders = orders.filter((order) => {
        return !multiId.includes(order.id);
      });
      setOrders(filteredOrders);
    }
  };
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
            <AllOrdersGrid rows={orders} deleteHandler={deleteHandler}/>
          </Box>
        </Box>
      );
}

export default AllOrders