import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";
import Gadgets from "./components/Gadgets";
import { loader as categoryLoader } from "./components/Home";
import { loader as gadgetDataLoader } from "./util/gadgetDataLoader";
import { loader as reviewDataLoader } from "./pages/Review";
import DashBoard from "./pages/DashBoard";
import CardDetails from "./pages/CardDetails";
import { useCartContext } from "./context/CartContextProvider";
import { useWishListContext } from "./context/WishListContextProvider";
import Cart from "./components/Cart";
import WishList from "./components/WishList";

import Review from "./pages/Review";
import Statistics from "./pages/Statistics";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: categoryLoader,
        children: [
          {
            path: "/",
            loader: gadgetDataLoader,
            element: <Gadgets />,
          },
          {
            path: "/gadget/:category",
            loader: gadgetDataLoader,
            element: <Gadgets />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/gadget/:category/details/:product_id",
        element: <CardDetails />,
        loader: gadgetDataLoader,
      },
      {
        path: "/testimonial",
        element: <Review />,
        loader: reviewDataLoader,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: gadgetDataLoader,
      },
    ],
  },
]);

function App() {
  const { cart } = useCartContext();
  const { wishList } = useWishListContext();
  console.log(cart);
  console.log(wishList);

  return <RouterProvider router={route} />;
}

export default App;
