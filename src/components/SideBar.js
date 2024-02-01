import React from "react";
import { IoHomeOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const sidebarClasses = `
    p-3 text-lg fixed left-0 h-full bg-white z-50 transition-transform
    ${isMenuOpen ? "transform translate-x-0 bg-opacity-90" : "transform -translate-x-full"}
    lg:translate-x-0 lg:static lg:block
  `;

  if (!isMenuOpen) return null; //earlier return

  return (
    <div className={sidebarClasses}>
      <div>
        <ul>
          <Link to="/">
            <li className="flex items-center my-4">
              <span className="text-2xl mx-5">
                <IoHomeOutline />
              </span>
              Home
            </li>
          </Link>
          <li className="flex items-center my-4">
            <span className="text-2xl mx-5">
              <MdOutlineSubscriptions />{" "}
            </span>
            Subscriptions
          </li>
          <li className="flex items-center my-4">
            <span className="text-2xl mx-5">
              <MdHistory />
            </span>
            History
          </li>
          <li className="flex items-center my-4">
            <span className="text-2xl mx-5">
              <IoVideocamOutline />
            </span>
            Your videos
          </li>
          <li className="flex items-center my-4">
            <span className="text-2xl mx-5">
              <FiClock />
            </span>
            Watch later
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
