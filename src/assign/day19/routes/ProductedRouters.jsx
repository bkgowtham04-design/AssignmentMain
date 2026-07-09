import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const ProductedRouters = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return user ? children : <Navigate to="/day19" replace />;
};

export default ProductedRouters;