import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CategoriesBtn from "./CategoriesBtn";

function Home() {
  const categories = useLoaderData();

  return (
    <div className=" w-[90%] mx-auto">
      <div className="relative flex justify-center -top-36 my-6">
        <Banner />
      </div>
      <div className="flex gap-2 justify-between mt-6 mb-12 ">
        <CategoriesBtn categories={categories} />
        <div className="basis-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
