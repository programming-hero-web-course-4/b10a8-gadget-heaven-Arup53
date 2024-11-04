import { Children, createContext, useContext, useState } from "react";

export const WishContext = createContext();

function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  function addToWishList(newWishObj) {
    setWishList((prevWish) => [...prevWish, newWishObj]);
  }

  return (
    <WishContext.Provider value={{ wishList, addToWishList }}>
      {children}
    </WishContext.Provider>
  );
}

export function useWishListContext() {
  const data = useContext(WishContext);
  return data;
}

export default WishListContextProvider;
