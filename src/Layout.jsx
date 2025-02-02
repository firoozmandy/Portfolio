import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Switcher />
    </div>
  );
};

export default Layout;
