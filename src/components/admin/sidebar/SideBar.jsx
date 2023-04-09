import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./style.css";
const SideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",

        mx: "auto",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url("/img/SastiDuqanLogo.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100px",
          width: "100px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavLink
       className="navLink"
          to="/admin/addProduct"
        >
          Add Product
        </NavLink>
        <NavLink
        className="navLink"
          to="/admin/allProduct"
        >
          All Products
        </NavLink>
        <NavLink
         className="navLink"
          to="/admin/allMessages"
        >
          All Messages
        </NavLink>
        <NavLink
        className="navLink"
          to="/admin/allOrders"
        >
          All Orders
        </NavLink>
       
      </Box>
      <NavLink
      className="navLink"
        to="/"
      >
        Logout
      </NavLink>
    </Box>
  );
};

export default SideBar;
