import React from "react";
import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  //user not logged in , redirect user to login route
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default RequireAuth;
