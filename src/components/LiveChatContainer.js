import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux store/LiveChatSlice";
import {
  generateRandomName,
  generateRandomMessage,
} from "../utils/HelperFunction";
import { AiOutlineSend } from "react-icons/ai";

const LiveChatContainer = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const liveMessages = useSelector((store) => store.LiveChat.message);

  useEffect(() => {
    const interval = setInterval(() => {

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className=" border border-black p-4 w-full rounded-lg h-[65vh] overflow-y-scroll flex flex-col-reverse">
        {liveMessages.map((message, index) => {
          return <LiveChatMessage key={index} data={message} />;
        })}
      </div>
      <form
        className="w-full p-1 my-2 flex justify-center border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Ansh Payal",
            message:chatMessage
          }))
          setChatMessage("");
        }}
      >
        <input
          className="w-full p-2 outline-none"
          placeholder="Chat"
          value={chatMessage}
          onChange={(e) => {
            setChatMessage(e.target.value);
          }}
        ></input>
        <button className="text-3xl p-1 mx-2 ">
          <AiOutlineSend />
        </button>
      </form>
    </>
  );
};

export default LiveChatContainer;
