import { NavLink } from "react-router-dom"

function CategoriesBtn({ categories }) {
  return (
    <div className="flex flex-col items-cente px-12 py-12 gap-2 text-base shadow-xl h-[500px] rounded-2xl ">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `px-4  text-base py-2 rounded-full hover:bg-custom hover:text-white  ${
            isActive ? "bg-custom text-white" : "bg-gray-200"
          }`
        }
      >
        All Products
      </NavLink>

      {categories.map((category) => (
        <NavLink
          to={`/gadget/${category.category}`}
          key={category.category}
          className={({ isActive }) =>
            `px-4 text-base py-2 rounded-full hover:bg-custom hover:text-white  ${
              isActive ? "bg-custom text-white" : "bg-gray-200"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  )
}

export default CategoriesBtn
