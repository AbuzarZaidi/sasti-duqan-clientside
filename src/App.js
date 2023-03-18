import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setTokenHandler,
  setIdHandler,
  setNameHandler,
  setLogin,
  setRoleHandler
} from "./store/auth";
import {fetchCategory} from './store/user/category'
import { setInitialProduct } from "./store/user/cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/user/home/Categories";
import TopNavbar from "./components/user/navbar/TopNavbar";
import Home from "./pages/user/Home";
import Contact from "./pages/user/Contact";
import Shop from "./pages/user/Shop";
import "./css/style.css";
import Footer from "./components/user/footer/Footer";
import ShoppingCart from "./pages/user/ShoppingCart";
import ProductDetail from "./pages/user/ProductDetail";
import Checkout from "./pages/user/Checkout";
import Signup from "./pages/user/Signup";
import Signin from "./pages/user/Signin";
import Page404 from "./pages/user/Page404";
//Admin
import PageStructure from "./components/admin/PageStructure/PageStructure";
import AddProduct from "./pages/admin/AddProduct";
import AllProduct from "./pages/admin/AllProducts";
import AllMessages from "./pages/admin/AllMessages";
import AllOrders from "./pages/admin/AllOrders";
import AllUsers from "./pages/admin/AllUsers";
import DashboardLandingPage from "./pages/admin/DashboardLandingPage";


function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authData.isLogin);
  const isAdmin = useSelector((state) => state.authData.role);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const productData = JSON.parse(localStorage.getItem("cartProduct"));

    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) > new Date()
    ) {
      dispatch(setTokenHandler(userData.token));
      dispatch(setIdHandler(userData.userId));
      dispatch(setNameHandler(userData.userName));
      dispatch(setRoleHandler(userData.role));
      if (productData.length > 0) {
        dispatch(setInitialProduct(productData));
      } else {
        dispatch(setInitialProduct([]));
      }
    }
  }, [dispatch]);

  return (
    <>
      <div className="body">
        {/* <TopNavbar /> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {isLogin && <Route path="/contact" element={<Contact />} />}
          {isLogin && <Route path="/detail" element={<ProductDetail />} />}
          {isLogin && <Route path="/shop" element={<Shop />} />}
          {isLogin && <Route path="/cart" element={<ShoppingCart />} />}
          {isLogin && <Route path="/checkout" element={<Checkout />} />}
          {!isLogin && <Route path="/signup" element={<Signup />} />}
          {!isLogin && <Route path="/signin" element={<Signin />} />}
          <Route path="/admin/" element={ <PageStructure><DashboardLandingPage /></PageStructure>} />
          <Route path="/admin/addProduct" element={ <PageStructure><AddProduct /></PageStructure>} />
          <Route path="/admin/allProduct" element={ <PageStructure><AllProduct /></PageStructure>} />
          <Route path="/admin/allMessages" element={ <PageStructure><AllMessages /></PageStructure>} />
          <Route path="/admin/allUsers" element={ <PageStructure><AllUsers /></PageStructure>} />
          <Route path="/admin/allOrders" element={ <PageStructure><AllOrders /></PageStructure>} />
             {/* <ProtectedRoute exact path="/admin/addProduct">
             <PageStructure><AddProduct /></PageStructure>
           </ProtectedRoute>
             <ProtectedRoute exact path="/admin/allProducts">
             <PageStructure><AllProduct /></PageStructure>
           </ProtectedRoute> */}
          <Route path="*" element={<Page404/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
