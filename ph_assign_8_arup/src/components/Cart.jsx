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

  function handleModal() {
    document.getElementById("my_modal_1").showModal();
  }

  function handleCloseModal() {
    document.getElementById("my_modal_1").close();
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
            onClick={handleModal}
            className="hover:bg-custom hover:text-white bg-white text-custom border-2 border-custom text-center font-bold px-6 py-2  rounded-full"
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
        <div className="modal-box">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <button className="btn" onClick={handleCloseModal}>
              koi
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Cart;
