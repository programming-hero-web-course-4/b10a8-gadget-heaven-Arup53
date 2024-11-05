import { Rating, ThinStar } from "@smastrom/react-rating";

function ReviewCard({ item }) {
  const { username, image, review, rating } = item;
  return (
    <div className="p-24 bg-yelow-300 flex gap-12 justify-center items-center">
      <figure className=" shadow-2xl rounded-xl shadow-black/60">
        <img
          className="w-full h-[200px] rounded-xl  "
          src={`${image}`}
          alt=""
        />
      </figure>
      <div className="basis-3/4 flex flex-col justify-center gap-6">
        <h3 className="text-4xl mb-6">{username}</h3>
        <p className="text-xl">{review}</p>
        <div className="flex text-base gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <p className="px-2 p-1 text-black  text-sm rounded-full">{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
