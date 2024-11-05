import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import ProductDetail from "../components/ProductDetail";
import { useEffect, useState } from "react";

function CardDetails() {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (product_id !== undefined) {
      const filteredArr = data.filter((data) => data.product_id == product_id);
      const [filterobj] = filteredArr;
      setProduct(filterobj);
    }
  }, [data, product_id]);

  return (
    <div>
      <Heading title="Product Details" type="productDetails" />

      <div className="min-h-[60vh]">
        <div className="relative flex justify-center -top-36 my-6">
          <ProductDetail product={product} />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
