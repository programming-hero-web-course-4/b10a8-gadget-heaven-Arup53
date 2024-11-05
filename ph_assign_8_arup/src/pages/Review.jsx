import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

import { Carousel } from "flowbite-react";
import ReviewCard from "../components/ReviewCard";

function Review() {
  const review = useLoaderData();

  return (
    <div>
      <Heading title="What our customers says" type="review" />

      <div className="w-[80%] mx-auto my-12">
        <div className=" h-[400px]">
          <Carousel
            theme={{
              control: {
                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-custom group-hover:bg-yellow-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white hover:scale-105 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
              },

              indicators: {
                active: {
                  off: "bg-black/30  hover:bg-yellow-300",
                  on: "bg-custom hover:scale-125 hover:bg-yellow-300 ",
                },
                base: "h-3 w-3 rounded-full",
                wrapper:
                  "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
              },
            }}
          >
            {review.map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Review;
