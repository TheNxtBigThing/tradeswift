import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dropdown from "../widgets/Dropdown";
import Searchbar from "../widgets/Searchbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu } from "@mui/icons-material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ThemeControl from "../widgets/ThemeControl";
import Weather from "./Weather";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import logo from "../assets/logo.png";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();

  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [togglename, setToggleName] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="z-50 text-sm md:text-base sticky bg-white dark:bg-dark dark:text-white border-0"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="navbar z-50 font-semibold flex justify-between items-center w-full p-1">
          <div className="left flex items-center gap-2">
            
            <a href="/">
              <div className="logo flex justify-center items-center text-center cursor-pointer">
                <img src={logo} alt="" className="w-[12vw]"/>
                {/* <p className="font-['chillax'] text-2xl flex text-sky-400">
                  TradeSwift<sup className="text-sm">TM</sup>
                </p> */}
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center">
            {isNonMobileScreen && (
              <div className="middle">
                <Dropdown
                  title={"Community"}
                  content={"Welcome to TradeSwift!"}
                />
              </div>
            )}
            <Link to="/contact" className="p-3">
              Contact Us
            </Link>
            <Link to="/news" className="p-3">
              News
            </Link>
          </div>

          <div className="right flex items-center gap-4">
            {isNonMobileScreen && (
              <div>
                <ThemeControl />
              </div>
            )}

            <div>
              <Searchbar />
            </div>
            {!user ? (
              <div className="signin">
                <Link to={"/auth/login"}>
                  <button className="hover:bg-sky-200 border-2 border-sky-400 text-nowrap p-2 rounded-lg">
                    Sign In
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div onMouseEnter={()=>setToggleName(true)} onMouseLeave={()=>setToggleName(false)}>
                <FaUser  />
{
  togglename?(<div className="bg-white fixed top-16 p-2 z-[1000]">{user.fullname}</div>):null
}
                </div>
                <div className="logout">
                  <button
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                    className="hover:bg-sky-200 border-2 border-sky-400 text-nowrap p-1 rounded-lg"
                  >
                    LogOut
                  </button>
                </div>
              </>
            )}
            {isNonMobileScreen && (
              <div>
                <Weather />
              </div>
            )}
          </div>
        </div>

        <div className="absolute bg-black/10 dark:bg-white p-[0.1px] w-full bottom-0" />
        {/* {toggle && !isNonMobileScreen && <Sidebar />} */}
      </div>
    </div>
  );
};

export default Navbar;