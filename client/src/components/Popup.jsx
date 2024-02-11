import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Popup = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && (
        <div className="popup fixed top-0 start-0 h-screen w-screen bg-black z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border">
          <div className="content fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-white rounded-3xl p-40">
            <CancelOutlinedIcon
              className=" cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
