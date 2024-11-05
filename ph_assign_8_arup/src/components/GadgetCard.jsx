import { Link } from "react-router-dom";

function GadgetCard({ gadget }) {
  console.log(gadget);
  const {
    product_id: id,
    product_title: title,
    product_image: image,
    category,
    price,
  } = gadget;

  return (
    <div className="flex flex-col p-2 gap-2 rounded-md shadow-xl ">
      <figure className="flex justify-center items-center ">
        <img
          className="w-[200px] h-[200px] object-contain  overflow-hidden rounded-md"
          src={`${image}`}
          alt=""
        />
      </figure>
      <h3 className="text-base font-bold">{title}</h3>
      <p>{price}$</p>

      <Link to={`/gadget/${category}/details/${id}`}>
        <button className="px-2 py-1 text-base font-semibold bg-white border border-custom text-custom mt-2 rounded-full ">
          Details
        </button>
      </Link>
    </div>
  );
}

export default GadgetCard;
