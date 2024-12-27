import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // initially, resInfo is null.....
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    message,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // Since there is a special character @, we cannot write as .@type => it will through an error.
  // you can also write as c.card?.["card"]?.["@type"]
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="mb-2">
        {`${avgRatingString} (${totalRatingsString}) . ${costForTwoMessage}`}
      </p>
      <p className="mb-2">{cuisines.join(", ")}</p>
      <p className="mb-2">{`Outlet: ${areaName}`}</p>
      <p className="mb-2">{sla?.slaString}</p>
      <p>{message}</p>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
