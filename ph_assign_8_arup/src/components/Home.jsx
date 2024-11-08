import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CategoriesBtn from "./CategoriesBtn";
import Heading from "./Heading";
import { useEffect, useState } from "react";

export async function loader() {
  const res = await fetch("/categories.json");
  const data = await res.json();
  return data || [];
}

function Home() {
  const categories = useLoaderData();

  return (
    <div className=" w-[95%] mx-auto">
      <Heading
        title={"Upgrade Your Tech Accessorize with_Gadget Heaven Accessories"}
      />

      <div className="relative flex justify-center -top-36 mt-6 ">
        <Banner />
      </div>

      <h3 className="text-4xl font-bold text-center text-custom">
        Explore Cutting-Edge Gadgets
      </h3>

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
