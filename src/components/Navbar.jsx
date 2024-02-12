import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Navbar;
