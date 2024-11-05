import { useEffect, useState } from "react";

import { Rating, ThinStar } from "@smastrom/react-rating";

import { FaRegHeart } from "react-icons/fa";
import { useCartContext } from "../context/CartContextProvider";
import { useWishListContext } from "../context/WishListContextProvider";
import toast from "react-hot-toast";

function ProductDetail({ product }) {
  const { cart, addToCart, setTotalPrice } = useCartContext({});
  const { wishList, addToWishList } = useWishListContext();

  const [loadedRating, setLoadedRating] = useState(null);
  const [active, setActive] = useState(false);

  const {
    product_id,
    product_title: title,
    product_image: image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product || {};

  function handleAddItem(arr, contextSetter, type = "cart") {
    const newItem = {
      product_id,
      title,
      image,
      price,
      description,
    };

    if (type === "wishList") {
      const bool = checkDulplicate(newItem, arr);
      if (!bool) {
        contextSetter(newItem);
        toast.success("This Item is Wishlisted");
      }
    } else {
      contextSetter(newItem);
      setTotalPrice(newItem);
      toast.success("Congrates! Added Item to your Cart");
    }
  }

  function checkDulplicate(obj, arr) {
    const isContain = arr.find((item) => item.product_id === obj.product_id);
    if (isContain) {
      return true;
    } else false;
  }

  function handleAddCartItem() {
    handleAddItem(cart, addToCart);
  }

  function handleAddWishItem() {
    handleAddItem(wishList, addToWishList, "wishList");
    setActive(true);
  }

  useEffect(() => {
    setLoadedRating(rating);
  }, [rating, product]);

  return (
    <div className=" min-w-[50rem] min-h-[25rem] px-2 py-2 bg-[#ffffff4d] border-2  rounded-lg  shadow-lg">
      <div className="w-full h-full flex flex-col gap-12 justify-between md:flex-row bg-white rounded-lg p-4 ">
        <figure className="flex justify-center items-center shadow-lg">
          <img className="h-64 object-contain" src={`${image}`} alt="" />
        </figure>
        <div className="basis-3/4 flex flex-col gap-4 ">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-base text-gray-500 font-semibold">
            Price: {price}$
          </p>
          <p
            className={`w-[100px] text-center py-1 px-2 rounded-2xl font-bold ${
              availability
                ? "bg-[#309c081a] text-lime-500 "
                : "bg-red-300/20 text-red-500"
            }`}
          >
            {availability ? "In Stock" : "Unavaliable"}
          </p>

          <p className="font-medium text-gray-500">{description}</p>

          <div>
            <p className="text-base font-bold mb-4">Specification</p>
            <ol>
              {Specification !== undefined &&
                Specification.map((item, idx) => (
                  <li className="text-gray-500/90" key={item}>
                    {idx + 1}. {item}
                  </li>
                ))}
            </ol>
          </div>

          <div className="text-lg font-bold">Rating</div>
          <div className="flex gap-2">
            <Rating style={{ maxWidth: 100 }} value={loadedRating} readOnly />
            <p className="p-1 bg-gray-200 text-sm rounded-xl">{loadedRating}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={!availability}
              onClick={handleAddCartItem}
              className="disabled:opacity-60 disabled:bg-gray-400 disabled:text-black/60 px-4 py-2 text-lg font-semibold bg-custom text-white rounded-full "
            >
              Add To Cart
            </button>

            <button
              disabled={active}
              onClick={handleAddWishItem}
              className="w-[40px] h-[40px] rounded-full border-2 border-black/20 text-black  bg-white flex justify-center items-center disabled:opacity-60 disabled:bg-gray-400 disabled:text-black/60 disabled:border-black/10 "
            >
              <span className=" w-[full] h-[full]">
                <FaRegHeart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
