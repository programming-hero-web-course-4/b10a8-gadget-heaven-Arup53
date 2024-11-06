import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

function DynamicTitleMaker() {
    const location = useLocation();

    useEffect(() => {
      const currTitle = titleUpdate(location.pathname);
      document.title = currTitle;
    }, [location.pathname]);
  
    return null;
}

export default DynamicTitleMaker;
