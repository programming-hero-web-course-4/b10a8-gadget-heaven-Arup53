function GadgetCard({ gadget }) {
  const { product_title: title, product_image: image, price } = gadget;
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
      <div>
        <button className="px-4 py-2 text-lg font-semibold bg-white border border-custom text-custom mt-2 rounded-full ">
          Details
        </button>
      </div>
    </div>
  );
}

export default GadgetCard;
