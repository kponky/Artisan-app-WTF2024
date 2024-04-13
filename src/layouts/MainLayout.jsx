import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"

const MainLayout = () => {
  return (
    <div>
  <Navbar/>
       <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
