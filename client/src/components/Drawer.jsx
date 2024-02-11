// Drawer.js
import React from "react";
import { FaTrademark } from "react-icons/fa6";
import { PiTrademark } from "react-icons/pi";
import { GoIssueTracks } from "react-icons/go";
import { SiTestrail } from "react-icons/si";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoIosNotifications } from "react-icons/io";

import { Link } from "react-router-dom";
const Drawer = ({ onItemClick }) => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  return (
    <div className=" text-current w-80 relative shadow-md">
      <ul className="py-4">
        <li
          className="cursor-pointer px-6 py-3 hover:bg-sky-400 flex gap-2 items-center "
          onClick={() => onItemClick("testtm")}
        >
          <SiTestrail className="w-4 h-4" />
          <p className=" font-semibold">Test Exist</p>
        </li>
        <li
          className="cursor-pointer px-6 py-3 hover:bg-sky-400 flex gap-2 items-center "
          onClick={() => onItemClick("filetrade")}
        >
          <PiTrademark className="w-4 h-4" />
          <p className=" font-semibold">File TradeMark</p>
        </li>
        <li
          className="cursor-pointer px-6 py-3 hover:bg-sky-400 flex gap-2 items-center"
          onClick={() => onItemClick("track")}
        >
          <GoIssueTracks className="w-4 h-4" />
          <p className=" font-semibold">Applications </p>{" "}
        </li>
        <li
          className="cursor-pointer px-6 py-3 hover:bg-sky-400 flex gap-2 items-center"
          onClick={() => onItemClick("notifications")}
        >
          <IoIosNotifications className="w-4 h-4" />
          <p className=" font-semibold">Notifications </p>{" "}
        </li>
        {!isNonMobileScreen && (
          <>
            <Link to="/contact" className="p-3">
              Contact Us
            </Link>
            <Link to="/news" className="p-3">
              News
            </Link>
          </>
        )}
      </ul>
      <div className="dark:bg-white bg-gray-200 p-[0.2px] h-full top-0 absolute right-0"></div>
    </div>
  );
};

export default Drawer;
