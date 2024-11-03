import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

import Heading from "../components/Heading";
import { useEffect, useState } from "react";

function AppLayout() {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setTitle("Upgrade Your Tech Accessorize with Gadget Heaven Accessories");
      setParagraph(
        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      );
    }
  }, [pathname]);

  return (
    <div className="sora-font">
      <div className={`${pathname === "/" ? "bg-custom rounded-md" : ""}`}>
        <Header />

        <Heading title={title} paragraph={paragraph} />
      </div>

      <div className="min-h-[60vh]]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
