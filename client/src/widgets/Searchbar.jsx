import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";

const Searchbar = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {isNonMobileScreen ? (
        <div className="search flex bg-gray-100 rounded-md p-1 items-center dark:bg-gray-600">
          <input
            type="text"
            className="bg-transparent outline-none w-[12rem] p-1"
            placeholder="Search"
          />
          <SearchIcon />
        </div>
      ) : (
        <div className="search  rounded-sm">
          {toggle && (
            <input
              type="text"
              className="bg-transparent outline-none w-[12rem] p-1"
              placeholder="Search"
            />
          )}

          <SearchIcon className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>
      )}
    </div>
  );
};

export default Searchbar;
