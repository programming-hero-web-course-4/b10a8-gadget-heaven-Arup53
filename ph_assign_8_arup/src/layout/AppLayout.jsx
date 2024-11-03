import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

import Heading from "../components/Heading";
import { useEffect, useState } from "react";

function AppLayout() {
  return (
    <div className="sora-font">
      <div className="w-[95%] mx-auto bg-custom">
        <Header />

        <Heading />
      </div>
      <div className="min-h-[75vh]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
