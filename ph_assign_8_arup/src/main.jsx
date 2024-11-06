import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import "@smastrom/react-rating/style.css"
import CartContextProvider from "./context/CartContextProvider.jsx"
import WishListContextProvider from "./context/WishListContextProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <WishListContextProvider>
        <App />
      </WishListContextProvider>
    </CartContextProvider>
  </StrictMode>
)
