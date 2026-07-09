import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/Authcontext";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProductedRouters from "./ProductedRouters";

const Approu = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="home"
          element={
            <ProductedRouters>
              <Home />
            </ProductedRouters>
          }
        />
        <Route
          path="profile"
          element={
            <ProductedRouters>
              <Profile />
            </ProductedRouters>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default Approu;