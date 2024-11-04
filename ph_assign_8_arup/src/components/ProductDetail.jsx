import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ product }) {
  console.log(product);

  const {
    product_id,
    product_title: title,
    product_image: image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  console.log(Specification);
  return (
    <div className=" min-w-[50rem] min-h-[25rem] px-2 py-2 bg-[#ffffff4d] border-2  rounded-lg  shadow-lg">
      <div className="w-full h-full flex flex-col gap-12 justify-between md:flex-row bg-white rounded-lg p-4 ">
        <figure className="flex justify-center shadow-lg">
          <img className="h-64 object-contain" src={`${image}`} alt="" />
        </figure>
        <div className="basis-3/4 flex flex-col gap-4 ">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-base text-gray-500 font-semibold">
            Price: {price}$
          </p>
          <p className="font-medium text-gray-500">{description}</p>

          <div>
            <p className="text-base font-bold mb-4">Specification</p>
            <ol>
              {Specification !== undefined &&
                Specification.map((item, idx) => (
                  <li className="text-gray-500/90" key={item}>
                    {idx + 1}. {item}
                  </li>
                ))}
            </ol>
          </div>

          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
