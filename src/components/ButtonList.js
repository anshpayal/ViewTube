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
  ];
  return (
    <div className="my-5 mx-4 text-sm font-semibold">
      {list.map((name) => {
        return (
          <button className="py-2 px-4 mx-5 bg-gray-300 rounded-lg">
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
