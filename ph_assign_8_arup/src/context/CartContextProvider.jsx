import { createContext, useContext, useState } from "react";

export const CartContex = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(newCartObj) {
    setCart((prevCart) => [...prevCart, newCartObj]);
  }

  return (
    <CartContex.Provider value={{ cart, addToCart }}>
      {children}
    </CartContex.Provider>
  );
}

export function useCartContext() {
  const data = useContext(CartContex);
  return data;
}

export default CartContextProvider;
