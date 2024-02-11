// Rightbar.js
import React from "react";
import News from "./News";

const Rightbar = ({ onItemClick }) => {
  return (
    <div className=" text-current w-4/12 relative shadow-md p-4">
     <div className="news h-[60vh] w-full overflow-y-scroll custom-scrollbar overflow-x-hidden">
  <News />
</div>

      <div className="dark:bg-white bg-gray-200 p-[0.2px] h-full top-0 absolute left-0"></div>
    </div>
  );
};

export default Rightbar;
