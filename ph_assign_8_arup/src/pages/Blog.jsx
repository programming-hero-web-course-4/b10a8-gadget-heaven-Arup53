import { useLoaderData, useSearchParams } from "react-router-dom";
import Heading from "../components/Heading";

import TestimonialCard from "../components/BlogCard";
import BlogCard from "../components/BlogCard";

function Blog() {
  const data = useLoaderData();

  return (
    <div>
      <Heading title={"Blog"} />

      <div className="w-[90%] min-h-[70vh] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((obj) => (
            <BlogCard key={obj.id} obj={obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
