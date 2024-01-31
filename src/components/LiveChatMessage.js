import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const LiveChatMessage = ({data}) => {
  console.log(data);
  return (
    <div className="my-3 flex items-center bg-gray-300 p-3 shadow-lg border-b-2 border-gray-400 rounded-lg">
      <span className="text-2xl mx-2">
        <FaCircleUser />
      </span>
      <p className="mx-2 font-semibold">{data.name}</p>
      <p>{data.message}</p>
    </div>
  );
};

export default LiveChatMessage;
