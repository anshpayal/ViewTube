import React, { useEffect, useState, useRef } from "react";
import Logo from "../Logo.png";
import { FiSearch } from "react-icons/fi";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../redux store/appSlice";
import { YOUTUBE_SEARCHSUGGESTIONS_API } from "../utils/Links";
import { cacheResults } from "../redux store/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const suggestionListRef = useRef(null);

  const handleclick = () => {
    dispatch(hideMenu());
  };
  const handleFocus = () => {
    setShowSuggestion(true);
  };
  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCHSUGGESTIONS_API + searchValue);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchValue]: json[1],
      })
    );
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
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, searchCache]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionListRef.current &&
        !suggestionListRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setSuggestions([]); // Hide the suggestion list
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex items-center justify-between border border-b-gray-300 shadow-lg">
      <div className="flex items-center">
        <span
          className=" text-xl mx-3 sm:text-2xl sm:mx-8 cursor-pointer"
          onClick={handleclick}
        >
          <TfiAlignJustify />
        </span>
        <img
          className="w-14 h-14 sm:w-20 sm:h-20 cursor-pointer"
          alt="logo"
          src={Logo}
        />
      </div>
      <div className="relative z-10 w-5/12 mr-6 ">
        <div className="flex items-center">
          <input
            ref={inputRef}
            className=" w-32 h-8 text-sm px-2 sm:w-full sm:h-11 sm:text-lg sm:px-7  rounded-l-3xl border border-gray-200 outline-none"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={handleFocus}
          ></input>
          <Link to={"/result?search_query=" + searchValue}>
            <button className=" text-lg px-3 h-8 sm:text-2xl sm:px-6 sm:h-11 bg-gray-300 rounded-r-3xl hover:bg-gray-200">
              <FiSearch />
            </button>
          </Link>
        </div>
        <div
          ref={suggestionListRef}
          className="my-1 absolute top-full left-0 bg-white shadow-xl w-full rounded-lg sm:w-11/12 sm:rounded-2xl"
        >
          <ul>
            {showSuggestion &&
              suggestions.map((suggestion, index) => {
                return (
                  <Link key={index} to={"/result?search_query=" + suggestion}>
                    <li
                      className="p-2 text-sm sm:text-lg flex items-center hover:bg-gray-200"
                      onClick={() => {
                        setSuggestions([]);
                      }}
                    >
                      <span className="mr-2">
                        <FiSearch />
                      </span>
                      {suggestion}
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex text-2xl mr-4  sm:text-4xl sm:mr-8">
        <FaCircleUser />
      </div>
    </div>
  );
};

export default Header;
