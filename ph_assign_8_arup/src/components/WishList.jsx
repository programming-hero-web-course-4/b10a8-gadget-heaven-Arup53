import { useWishListContext } from "../context/WishListContextProvider";
import CardDashboard from "./CardDashboard";

function WishList() {
  const { wishList } = useWishListContext();

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-6 py-12">
      <h3 className="text-2xl font-bold">WishList</h3>

      <div className="w-[95%] mx-auto grid grid-cols-1 gap-6">
        {wishList.map((item) => (
          <CardDashboard key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
