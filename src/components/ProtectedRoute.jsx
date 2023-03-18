import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const isLogin = useSelector((state) => state.authData.isLogin);
  const isAdmin = useSelector((state) => state.authData.role);
  return isLogin&&isAdmin==="admin" ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;