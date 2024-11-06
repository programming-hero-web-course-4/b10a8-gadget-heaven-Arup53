import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard";
import { useEffect, useState } from "react";
import Errorpage from "../pages/Errorpage";

function Gadgets() {
  const data = useLoaderData();

  const { category } = useParams();
  

  const [gadget, setGadget] = useState([]);
  useEffect(
    function () {
      if (category === "Accesories") {
        return;
      }
      if (category) {
        const filterArr = data.filter((data) => data.category === category);
        
        setGadget(filterArr);
      } else {
        setGadget(data);
      }
    },
    [data, category]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {category === "Accesories" || category === "Charger" ? (
        <Errorpage />
      ) : (
        gadget.map((gadget) => (
          <GadgetCard key={gadget.product_id} gadget={gadget} />
        ))
      )}
    </div>
  );
}

export default Gadgets;
