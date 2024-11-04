import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

import Heading from "../components/Heading";
import { useEffect, useState } from "react";

function AppLayout() {
  const obj = useLocation();
  const { category } = useParams();
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (obj.pathname === `/gadget/${category}` || obj.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [obj.pathname, category]);

  return (
    <div className="sora-font">
      <div
        className={`w-[95%]  mx-auto ${
          home ? "bg-custom rounded-t-xl text-white" : "bg-white"
        } `}
      >
        <Header />
      </div>
      <div className="min-h-[75vh]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
