import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Errorpage() {
  const obj = useParams();
  const [urlObj, setUrlObj] = useState(obj);
  useEffect(() => setUrlObj(obj), [obj]);

  return (
    <div
      className={`container mx-auto ${
        Object.keys(urlObj).length === 0 && "px-32 py-12"
      } `}
    >
      <div className="flex flex-col justify-center items-center w-[62.5rem]  ">
        <img src="https://i.ibb.co.com/mT9TX95/error.jpg" alt="" />
        <h3 className="text-center text-4xl ">{`${
          Object.keys(urlObj).length !== 0
            ? "No Item Avaliable"
            : "You Have Typed Wrong URL"
        }`}</h3>
      </div>
    </div>
  );
}

export default Errorpage;
