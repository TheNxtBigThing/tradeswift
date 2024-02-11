import React, { useState, useEffect, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { motion } from "framer-motion";
import dropdown from "../assets/dropdown.jpg";
import { slideFromUp } from "../constants/style";

const Dropdown = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  return (
    <div
      className="dropdown relative text-center"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header font-semibold flex gap-2">
        <p>{title}</p>
        {toggle ? (
          <ArrowDropUpIcon className="icon" />
        ) : (
          <ArrowDropDownIcon className="icon" />
        )}
      </div>
      {toggle && (
        <motion.div
          variants={slideFromUp}
          initial="hidden"
          animate="visible"
          className="dropdown-content mt-4 max-h-[55vh] w-screen flex shadow-xl fixed start-0 z-40 bg-white dark:bg-dark"
        >
          <img src={dropdown} alt="gif" className="h-[30vh]" />
          <p className="p-10">{content}</p>
          <br />
          <p className="p-10">hassle free Trademarks✔️</p>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
