import { NavLink } from "react-router-dom";

function Heading({ title, paragraph }) {
  const [first, second] = title.split("_");

  return (
    <div
      className={`mb-12 bg-custom flex flex-col items-center py-12 ${
        title.length > 20 && "rounded-b-xl"
      } min-h-[50vh]`}
    >
      <div className="text-center font-bold text-white">
        {title.length > 20 ? (
          <h1 className="text-5xl">
            {first} <br />
            {second}
          </h1>
        ) : (
          <h1 className="text-2xl">{title}</h1>
        )}
      </div>

      <p className="text-base text-center text-white opacity-80 my-2">
        "Explore the latest gadgets that will take your experience to the next
        level. From smart devices <br />
        to the coolest accessories, we have it all!"
      </p>

      {title.length > 20 && (
        <button className="px-8 py-4 text-lg font-semibold bg-white text-custom mt-2 mb-32 rounded-full ">
          Shop Now
        </button>
      )}

      {title === "Dashboard" && (
        <div className="mt-12 text-2xl flex gap-6 ">
          <NavLink
            className={({ isActive }) =>
              `hover:bg-white hover:text-custom text-center font-bold px-12 py-2  rounded-full ${
                isActive
                  ? " bg-white text-custom "
                  : "bg-custom border-2 border-white text-white"
              }`
            }
            to={"/dashboard/cart"}
          >
            Cart
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:bg-white hover:text-custom text-center font-bold px-12 py-2  rounded-full ${
                isActive
                  ? " bg-white text-custom "
                  : "bg-custom border-2 border-white text-white"
              }`
            }
            to={"/dashboard/wishlist"}
          >
            WishList
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Heading;
