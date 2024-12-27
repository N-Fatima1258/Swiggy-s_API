import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleCLick = () => {
   
    setShowIndex();
  };
  return (
    <div>
      {/* accordion header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleCLick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length}){" "}
          </span>
          <span>▾</span>
        </div>
        {/* accordian body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

// tailwind divides the screen / page into 6 sections
// 6/12 is half the page
