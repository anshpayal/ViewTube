import React from "react";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Soccer",
    "Cricket",
    "Cooking",
    "Podcast",
    "Stocks",
    "Programming",
    "Gadgets",
    "Sales",
    "History"
  ];
  return (
    <div className="my-5 mx-4 text-sm font-semibold">
      {list.map((name,index) => {
        return (
          <button key={index} className="py-2 px-4 mx-5 bg-gray-300 rounded-lg">
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
