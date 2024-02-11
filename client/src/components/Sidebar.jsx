import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { slideFromLeft } from "../constants/style";
import ThemeControl from "../widgets/ThemeControl";
import Weather from "./Weather";
import Drawer from "./Drawer";
const Sidebar = () => {
  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      animate="visible"
      className="md:w-[18vw] w-[70vw] min-h-screen absolute start-0 top-[3.6rem] shadow-xl border-r-2 align-middle text-center pt-[20px] bg-white dark:bg-dark"
    >
      <div className="w-1/2 flex items-center">
        <ThemeControl />
        <Weather />
      </div>
      <Link to="/news">News</Link>
      <br />
      <br />
      <Link to="/contact">Contact</Link>
      <div>
        <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-[20px]">
          <div>
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
          </div>
          <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes Upside-Down
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
      <Drawer />
    </motion.div>
  );
};

export default Sidebar;
