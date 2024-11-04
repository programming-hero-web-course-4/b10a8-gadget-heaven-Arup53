import { createContext, useContext, useState } from "react";

export const CartContex = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  function addToCart(newCartObj) {
    setCart((prevCart) => [...prevCart, newCartObj]);
  }
  function setTotalPrice(obj) {
    setPrice((prev) => prev + obj.price);
  }

  return (
    <CartContex.Provider value={{ cart, addToCart, totalPrice, setTotalPrice }}>
      {children}
    </CartContex.Provider>
  );
}

export function useCartContext() {
  const data = useContext(CartContex);
  return data;
}

export default CartContextProvider;
