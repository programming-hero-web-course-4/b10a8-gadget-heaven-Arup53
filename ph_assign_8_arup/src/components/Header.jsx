import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContextProvider";
import { useWishListContext } from "../context/WishListContextProvider";

function Header() {
  const { cart } = useCartContext();
  const { wishList } = useWishListContext();

  return (
    <div className=" px-2 md:px-5 md:py-4 flex justify-between items-center gap-5 font-semibold   ">
      <div>
        <h3 className="text-lg">Gadget Heaven</h3>
      </div>

      <div className="flex   items-center  gap-5">
        <div className="hidden md:flex gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <div>Statistics</div>
          <NavLink to={"/dashboard"}>DashBoard</NavLink>
        </div>
      </div>

      <details className="dropdown md:hidden">
        <summary className="btn bg-white bg-opacity-0 border-none rounded-none shadow-none">
          <div className="btn m-1 rounded-full w-12 h-12 bg-white bg-opacity-0 border-stone-100">
            <img
              src="https://img.icons8.com/ios-filled/100/menu--v1.png"
              alt=""
            />
          </div>
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixtures</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
        </ul>
      </details>

      <div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <p className="w-[30px] h-[30px] rounded-full hover:bg-slate-200/60   bg-white/90 flex justify-center items-center">
              <span className="text-black ">
                <GiShoppingCart />
              </span>
            </p>

            <p
              className={
                cart.length > 0
                  ? "relative left-4 -top-10 w-[20px] h-[20px] rounded-full text-center text-sm text-red-600 bg-white z-10"
                  : "hidden"
              }
            >
              {cart.length}
            </p>
          </div>

          <div>
            <p className="w-[30px] h-[30px] rounded-full hover:bg-slate-200/60  bg-white/90 flex justify-center items-center">
              <span className="text-black ">
                <FaRegHeart />
              </span>
            </p>

            <p
              className={
                wishList.length > 0
                  ? "relative left-4 -top-10 w-[20px] h-[20px] rounded-full text-center text-sm text-red-600 bg-white z-10 "
                  : "hidden"
              }
            >
              {wishList.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
