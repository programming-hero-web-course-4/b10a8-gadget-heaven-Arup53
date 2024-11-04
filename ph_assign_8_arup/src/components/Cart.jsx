import { useState } from "react";
import { useCartContext } from "../context/CartContextProvider";
import CardDashboard from "./CardDashboard";

function Cart() {
  const { cart, totalPrice } = useCartContext();

  const [cartArr, setCartArr] = useState(cart);

  function handleSort() {
    const newArr = [...cart].sort((a, b) => b.price - a.price);
    setCartArr(newArr);
  }

  return (
    <div className="w-[90%] mx-auto flex flex-col py-12">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Cart</h3>

        <div className="flex items-center gap-6">
          <h3 className="text-2xl">Total Cost: {totalPrice}$</h3>
          <button
            className="hover:bg-custom hover:text-white bg-white text-custom border-2 border-custom text-center font-bold px-6 py-2  rounded-full"
            onClick={handleSort}
          >
            Sort By Price
          </button>
          <button className="hover:bg-custom hover:text-white bg-white text-custom border-2 border-custom text-center font-bold px-6 py-2  rounded-full">
            Purchase
          </button>
        </div>
      </div>

      <div className="w-[95%] mx-auto grid grid-cols-1 gap-6">
        {cartArr.map((item, index) => (
          <CardDashboard key={`${item.product_id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
