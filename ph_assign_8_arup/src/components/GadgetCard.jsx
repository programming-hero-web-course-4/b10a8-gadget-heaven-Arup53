import { Link } from "react-router-dom";

function GadgetCard({ gadget }) {
  const {
    product_id: id,
    product_title: title,
    product_image: image,
    price,
  } = gadget;

  return (
    <div className="flex flex-col p-2 gap-2 rounded-md shadow-xl ">
      <figure className="flex justify-center items-center ">
        <img
          className="w-full h-[200px] object-contain  overflow-hidden rounded-md"
          src={`${image}`}
          alt=""
        />
      </figure>
      <h3 className="text-base font-bold">{title}</h3>
      <p>{price}$</p>

      <Link to={`details/${id}`}>
        <button className="px-2 py-1 text-base font-semibold bg-white border border-custom text-custom mt-2 rounded-full ">
          Details
        </button>
      </Link>
    </div>
  );
}

export default GadgetCard;
