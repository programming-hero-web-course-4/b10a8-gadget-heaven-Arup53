import { useCartContext } from "../context/CartContextProvider";

function CardDashboard({ item }) {
  console.log(item);
  const { title, image, price, description } = item;

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

      <div className="pt-20">
        <p>delete</p>
      </div>
    </div>
  );
}

export default CardDashboard;
