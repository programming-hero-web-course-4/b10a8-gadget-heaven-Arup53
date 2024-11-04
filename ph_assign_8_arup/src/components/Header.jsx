import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" px-2 md:px-5 md:py-2 flex justify-between items-center gap-5 font-semibold   ">
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

      <div className="flex gap-1">
        <p className="w-[30px] h-[30px] rounded-full   bg-white flex justify-center items-center">
          <span className="text-black">
            <GiShoppingCart />
          </span>
        </p>
        <p className="w-[30px] h-[30px] rounded-full   bg-white flex justify-center items-center">
          <span className="text-black">
            <FaRegHeart />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Header;
