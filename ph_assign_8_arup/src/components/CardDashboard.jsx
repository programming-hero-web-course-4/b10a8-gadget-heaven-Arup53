import { useCartContext } from "../context/CartContextProvider";
import { RiDeleteBin2Line } from "react-icons/ri";

function CardDashboard({ item, type = "cart" }) {
  const { cart, deleteFromCart } = useCartContext();
  const { product_id, title, image, price, description } = item;

  return (
    <div className="flex flex-col gap-12 md:flex-row shadow-xl rounded-2xl">
      <figure className="flex justify-center items-center shadow-xl rounded-xl">
        <img
          className="w-[200px] h-[200px] object-contain overflow-hidden "
          src={`${image}`}
          alt=""
        />
      </figure>
      <div className="basis-3/4 flex flex-col justify-center gap-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-black/60">Description:{description}</p>
        <p className="text-lg font-bold text-gray-400">Price: ${price}</p>
      </div>

      {type === "cart" && (
        <div className="pt-20 px-6">
          <button onClick={() => deleteFromCart(product_id, cart, item)}>
            <span className="text-2xl">
              <RiDeleteBin2Line />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CardDashboard;
