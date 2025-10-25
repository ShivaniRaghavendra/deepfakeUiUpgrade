import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
