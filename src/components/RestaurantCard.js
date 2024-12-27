import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[400px] flex flex-col">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="text-gray-600 text-sm mb-2">Rating: {avgRating} ⭐</h4>
        <h4 className="text-gray-700 text-sm mb-2">
          Cuisines: {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-600 text-sm mb-2">
          Cost for Two: {costForTwo}
        </h4>
        <h4 className="text-gray-600 text-sm">Delivery: {sla?.slaString}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
// about media queru => if my device size is greater than lg
