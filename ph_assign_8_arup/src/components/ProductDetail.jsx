import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";

import { FaRegHeart } from "react-icons/fa";
import { useCartContext } from "../context/CartContextProvider";

function ProductDetail({ product }) {
  const { cart, addToCart } = useCartContext({});

  const [loadedRating, setLoadedRating] = useState(null);

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

  function handleAddItem() {
    const newItem = {
      product_id,
      title,
      image,
      price,
      description,
    };

    const bool = checkDulplicate(newItem);
    if (!bool) {
      addToCart(newItem);
    }
  }

  function checkDulplicate(obj) {
    const isContain = cart.find((item) => item.product_id === obj.product_id);
    if (isContain) {
      return true;
    } else false;
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
              onClick={handleAddItem}
              className="px-4 py-2 text-lg font-semibold bg-custom text-white rounded-full "
            >
              Add To Cart
            </button>

            <p className="w-[40px] h-[40px] rounded-full border-2 border-black/20   bg-white flex justify-center items-center">
              <span className="text-black w-[full] h-[full]">
                <FaRegHeart />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
