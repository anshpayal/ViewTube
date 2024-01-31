import React, { useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux store/LiveChatSlice";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const liveMessages = useSelector((store) => store.LiveChat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: "Ansh",
          message: "First message",
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border border-gray-500 p-4 w-full rounded-lg h-[65vh] bg-gray-100 overflow-y-scroll flex-reverse">
      {liveMessages.map((message,index) => {
        return <LiveChatMessage key={index} data={message} />;
      })}
    </div>
  );
};

export default LiveChatContainer;
