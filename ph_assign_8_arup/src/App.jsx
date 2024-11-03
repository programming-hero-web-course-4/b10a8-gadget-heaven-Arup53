import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./components/Home";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
