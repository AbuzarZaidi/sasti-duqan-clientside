import React, { useState,useEffect } from "react";
import {getTotalRecord} from '../../functions/admin/dashboard'
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

const DashboardLandingPage = () => {
  const [data,setData]=useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTotalRecord();
      if (result.success===true) {
        setData(result.data);
        console.log(result.data);
      }
    };
    fetchData();
  }, [])
  
  return (
    <Box
      sx={{ width: "95%", mx: "auto", marginTop: "1rem", marginBottom: "5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3,mb:2 }}>
        <Box
          sx={{
            backgroundColor: "#FFEECC",
            width: "30%",
            height: "27vh",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-around",
              mt: "10%",
            }}
          >
            <Box>
              <img src="/img/card1.png" alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.5rem", color: "#AA7200" }}
                gutterBottom
              >
                Total Sale
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "2rem" }} gutterBottom>
                Rs. {data.totalSales}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFDCCD",
            width: "30%",
            height: "27vh",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-around",
              mt: "10%",
            }}
          >
            <Box>
              <img src="/img/card2.png" alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.5rem", color: "#AA7200" }}
                gutterBottom
              >
                Pending Amount
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "2rem" }} gutterBottom>
                Rs. {data.totalPending}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#E4FFCC",
            width: "30%",
            height: "27vh",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-around",
              mt: "10%",
            }}
          >
            <Box>
              <img src="/img/card3.png" alt="" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.5rem", color: "#AA7200" }}
                gutterBottom
              >
                Complete Orders
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "2rem" }} gutterBottom>
                {data.completedOrder}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  );
};

export default DashboardLandingPage;
