import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-4 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          {/* Left Section: Text */}
          <div className="w-8/12">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span className="text-gray-600">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Right Section: Image and Button */}
          <div className="w-4/12 flex flex-col items-end">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="h-20 w-20 object-cover rounded-lg mb-2"
            />
            <button
              className="px-4 py-2 rounded-lg bg-green-500 text-white shadow-lg hover:bg-green-600"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

//387468
