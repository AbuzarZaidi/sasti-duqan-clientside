import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import {getSingleOrder,updateOrderStatus} from '../../functions/admin/orders'
import {
  Button,
  Box,
  Typography,
  
} from "../../utils/MUI";
const SingleOrder = () => {
  const { orderId } = useParams(); 
  const [orderData, setOrderData] = useState(null); 
  const [deliver,setDeliver]=useState(false)
const updateStatusHandler=async()=>{

const response=await updateOrderStatus(orderId,"delivered")

if(response.success){
 
  setDeliver(true)
}
}
  useEffect(() => {
    
    const fetchOrderData = async () => {
      try {
        const response = await getSingleOrder(orderId); 
       
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchOrderData(); 
  }, [orderId]);
  if (!orderData) {
    return <p>Loading...</p>; 
  }
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
            <b>Tracking Id:</b> {orderData.trackingId}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Status:</b> {orderData.status}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 3, marginBottom: 2 }}>
          <Typography variant="h6" component="h6">
            UserInfo:
          </Typography>
        </Box>
        <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Name:</b> {orderData.userInfo.firstName} {orderData.userInfo.lastName}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Email:</b> {orderData.userInfo.email}
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
            <b>Address:</b> {orderData.userInfo.address}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Phone Number:</b> {orderData.userInfo.phoneNumber}
          </Typography>
        </Box>
    
     
       
      </Box>
      <Box sx={{ marginTop: 3, marginBottom: 2 }}>
          <Typography variant="h6" component="h6">
            Product Detail:
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
            <b>Product Name:</b> {orderData.name}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Quantity:</b> {orderData.quantity}
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
            <b>Price:</b> {orderData.price}
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            <b>Total:</b> {orderData.price*orderData.quantity}
          </Typography>
        </Box>

      {orderData.status==="pending"&&
      <Button
            variant="contained"
            sx={{
              marginTop:2,
              backgroundColor: "#FD8004",
              "&:hover": {
                backgroundColor: "#FFA931",
              },
            }}
            onClick={updateStatusHandler}
            disabled={deliver}
          >
           Delivered 
          </Button>}
    </Box>
  );
};

export default SingleOrder;
