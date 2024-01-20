import React from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { FaCircleUser} from "react-icons/fa6";
import Logo from "../Logo.png";

const Header = () => {
  return (
    <div className=" flex items-center justify-between border border-b-gray-300">
      <div className="flex items-center ml-8">
        <img className="w-20 h-20 cursor-pointer" alt="logo" src={Logo} />
      </div>
      <div className="w-5/12 flex items-center">
        <input
          className="w-full h-11 p-3 rounded-l-3xl border border-gray-200 outline-none"
          type="text"
          placeholder="Search"
        ></input>
        <button className=" text-2xl px-6 h-11 bg-gray-300 rounded-r-3xl hover:bg-gray-200">
          <FiSearch />
        </button>
      </div>
      <div className="flex mr-8 text-4xl gap-x-6">
          <FaCircleUser />
          <FiAlignJustify />
      </div>
    </div>
  );
};

export default Header;
