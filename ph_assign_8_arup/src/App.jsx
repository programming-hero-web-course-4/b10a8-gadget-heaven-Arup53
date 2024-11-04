import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";
import Gadgets from "./components/Gadgets";
import Errorpage from "./pages/Errorpage";
import DashBoard from "./pages/DashBoard";
import CardDetails from "./pages/CardDetails";

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
      },
      {
        path: "details/:product_id",
        element: <CardDetails />,
        loader: () => fetch("../gadgetdata.json"),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
