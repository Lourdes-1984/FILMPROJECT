import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use_auth";

const PirvateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return children;
  return <Navigate to={"/login"} />;
};

export default PirvateRoute;
