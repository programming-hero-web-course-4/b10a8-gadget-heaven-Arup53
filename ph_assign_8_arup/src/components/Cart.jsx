import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContextProvider";

import CardDashboard from "./CardDashboard";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, setCart, setPrice } = useCartContext();
  const navigate = useNavigate();

  const [cartArr, setCartArr] = useState(cart);

  useEffect(() => {
    setCartArr(cart);
  }, [cart]);

  function handleSort() {
    const newArr = [...cart].sort((a, b) => b.price - a.price);
    setCartArr(newArr);
  }

  function handleModal() {
    document.getElementById("my_modal_1").showModal();
  }

  function handleCloseModal() {
    setCart([]);
    setPrice(0);
    document.getElementById("my_modal_1").close();
    navigate("/");
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
          <button
            disabled={(totalPrice !== 0) & (cart.length !== 0) ? false : true}
            onClick={handleModal}
            className="hover:bg-custom hover:text-white bg-white text-custom border-2 border-custom text-center font-bold px-6 py-2 disabled:bg-gray-400 disabled:text-black/30 disabled:border-black/10  rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="w-[95%] mx-auto grid grid-cols-1 gap-6">
        {cartArr.map((item, index) => (
          <CardDashboard key={`${item.product_id}-${index}`} item={item} />
        ))}
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-[400px]">
          <div className="flex flex-col items-center gap-2">
            <figure>
              <img className="w-[50px] h-[50px]" src="/Group.png" alt="" />
            </figure>
            <h3 className="font-bold text-lg">Payment Successfully</h3>
            <p className="py-4 text-black/60">Thanks for purchasing</p>
            <p className="py-4 text-black/60">Total: ${totalPrice}</p>
            <button
              className="btn w-full rounded-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Cart;
