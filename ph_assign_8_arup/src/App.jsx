import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";
import Gadgets from "./components/Gadgets";
import Errorpage from "./pages/Errorpage";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
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
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
