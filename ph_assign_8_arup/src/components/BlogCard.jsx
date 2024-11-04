import { Rating, ThinStar } from "@smastrom/react-rating";

function BlogCard({ obj }) {
  const { title, info, image } = obj;

  return (
    <div className="grid grid-cols-1 gap-2 shadow-xl p-4 ">
      <figure className="h-[400px]">
        <img
          className="h-full overflow-hidden rounded-xl"
          src={`${image}`}
          alt=""
        />
      </figure>
      <h3 className="text-xl font-bold text-left">{title}</h3>
      <p className="text-xs">{info}</p>
    </div>
  );
}

export default BlogCard;
