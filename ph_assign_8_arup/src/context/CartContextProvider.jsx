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
  function reduceTotalPrice(obj) {
    setPrice((prev) => prev - obj.price);
  }

  function deleteFromCart(productId, arr, obj) {
    let remove = false;
    const filteredArr = arr.filter((item) => {
      if (item.product_id === productId && !remove) {
        remove = true;
        return false;
      }
      return true;
    });
    setCart(filteredArr);
    reduceTotalPrice(obj);
  }

  return (
    <CartContex.Provider
      value={{
        cart,
        addToCart,
        setCart,
        totalPrice,
        deleteFromCart,
        setTotalPrice,
        setPrice,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}

export function useCartContext() {
  const data = useContext(CartContex);
  return data;
}

export default CartContextProvider;
