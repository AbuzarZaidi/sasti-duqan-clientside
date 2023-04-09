import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductsGrid from "../../components/admin/allorders/ProductGrid";
const SingleOrder = () => {
  const order = useSelector((state) => state.orderData.order);
  console.log(order);
  return (
    <Box
      sx={{
        width: "90%",
        marginTop: "1rem",
        marginBottom: "5rem",
        color: "#000000",
        ml: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h3">
            Order Detail:
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Tracking Id:</b> {order.trackingId}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Status:</b> {order.status}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Total:</b> {order.total}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 3, marginBottom: 2 }}>
          <Typography variant="h6" component="h6">
            UserInfo:
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Name:</b> {order.userInfo.firstName} {order.userInfo.lastName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" component="subtitle2">
            <b>Email:</b> {order.userInfo.email}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Phone Number:</b> {order.userInfo.phoneNumber}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" component="subtitle2">
            <b>City:</b> {order.userInfo.city}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Zip Code:</b> {order.userInfo.zipCode}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" component="subtitle2">
            <b>Address:</b> {order.userInfo.address}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{ marginTop: 3, marginBottom: 2 }}>
          <Typography variant="h6" component="h6">
            Products:
          </Typography>
        </Box>
      <ProductsGrid product={order.products}/>
    </Box>
  );
};

export default SingleOrder;
