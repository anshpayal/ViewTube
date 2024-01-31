import React, { useEffect, useState } from "react";
import Logo from "../Logo.png";
import { FiSearch } from "react-icons/fi";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../redux store/appSlice";
import { YOUTUBE_SEARCHSUGGESTIONS_API } from "../utils/Links";
import { cacheResults } from "../redux store/searchSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(hideMenu());
  };

  const handleFocus = () => {
    setShowSuggestion(true);
  };
  const handleblur = () => {
    setShowSuggestion(false);
  };

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCHSUGGESTIONS_API + searchValue);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(cacheResults({
      [searchValue]: json[1],
    }))
  };
  /*
    searchCache = {
      "iphone" : [iphone 11, iphone 12]
    }
    searchValue= iphone
  */


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        setSuggestions(searchCache[searchValue]);
      } else {
        searchSuggestions();
      }
    }, 200);
    const handleScroll = () => {
      setShowSuggestion(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, searchCache]);

  return (
    <div className=" flex items-center justify-between border border-b-gray-300 shadow-lg">
      <div className="flex items-center">
        <span className="text-2xl mx-8 cursor-pointer" onClick={handleclick}>
          <TfiAlignJustify />
        </span>
        <img className="w-20 h-20 cursor-pointer" alt="logo" src={Logo} />
      </div>
      <div className=" relative z-10 w-5/12">
        <div className="flex items-center">
          <input
            className="w-full h-11 text-lg px-7  rounded-l-3xl border border-gray-200 outline-none"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={handleFocus}
            onBlur={handleblur}
          ></input>
          <button className=" text-2xl px-6 h-11 bg-gray-300 rounded-r-3xl hover:bg-gray-200">
            <FiSearch />
          </button>
        </div>
        <div className="my-1 absolute top-full left-0 bg-white shadow-xl w-11/12 rounded-2xl">
          <ul>
            {showSuggestion &&
              suggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 text-lg flex items-center hover:bg-gray-200"
                  >
                    {" "}
                    <span className="mr-2">
                      <FiSearch />
                    </span>
                    {suggestion}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="flex mr-8 text-4xl gap-x-6">
        <FaCircleUser />
      </div>
    </div>
  );
};

export default Header;
