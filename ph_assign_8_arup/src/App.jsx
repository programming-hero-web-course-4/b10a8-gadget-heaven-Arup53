import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";
import Gadgets from "./components/Gadgets";

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
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../gadgetdata.json"),
            element: <Gadgets />,
          },
          {
            path: "/gadget/:category",
            loader: () => fetch("../gadgetdata.json"),
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
        path: "details/:product_id",
        element: <CardDetails />,
        loader: () => fetch("../gadgetdata.json"),
      },
      {
        path: "/testimonial",
        element: <Review />,
        loader: () => fetch("../review.json"),
      },
      { path: "/statistics", element: <Statistics /> },
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
