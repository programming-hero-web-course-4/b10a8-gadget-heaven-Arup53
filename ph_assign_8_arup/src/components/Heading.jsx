import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Heading({ title, paragraph }) {
  const { pathname } = useLocation();
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    if (title.length === 60) {
      const [t1, t2] = title.split("with");
      setFirst(t1);
      setSecond(t2);
    } else {
      setFirst(title);
    }
  }, [title]);

  return (
    <div className="my-12 flex flex-col items-center">
      {pathname === "/" ? (
        <h3 className="text-5xl text-center font-bold text-white">
          {first}
          <br />
          {second}
        </h3>
      ) : (
        <h3 className="text-2xl text-center font-bold text-white">{first}</h3>
      )}

      <p className="text-base text-center text-white opacity-60 my-2">
        {paragraph}
      </p>

      <button className="px-8 py-4 text-lg font-semibold bg-white text-custom mt-2 mb-32 rounded-full ">
        Shop Now
      </button>
    </div>
  );
}

export default Heading;
