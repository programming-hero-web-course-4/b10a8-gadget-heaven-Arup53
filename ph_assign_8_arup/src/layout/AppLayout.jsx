import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

import Heading from "../components/Heading";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import { Toaster } from "react-hot-toast";

const routeTitleObj = {
  "/": "Home| GadgetHeaven",
  "/dashboard": "Dashboard | GadgetHeaven",
  "/dashboard/cart": "Cart | Dashboard |GadgetHeaven",
  "/dashboard/wishlist": "Wishlist | Dashboard |GadgetHeaven",
  "/testimonial": "Testimonial | GadgetHeaven",
  "/statistics": "Statistics | GadgetHeaven",
};

function titleUpdate(path) {
  if (routeTitleObj[path]) {
    return routeTitleObj[path];
  }

  // first dynamic route checking
  const categoryFound = path.match(/^\/gadget\/([^/]+)$/);
  if (categoryFound) {
    const category = categoryFound[1];
    return `${category}|Gadget Heaven`;
  }

  // second

  const productFound = path.match(/^\/gadget\/([^/]+)\/details\/([^/]+)$/);
  if (productFound) {
    const category = productFound[1];
    const productId = productFound[2];
    return `${productId} in ${category}|Gadget Heaven`;
  }

  return "Gadget Heaven";
}

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currTitle = titleUpdate(location.pathname);
    document.title = currTitle;
  }, [location.pathname]);

  return null;
}

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
    <>
      <TitleUpdater />
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

        <Toaster />
      </div>
    </>
  );
}

export default AppLayout;
