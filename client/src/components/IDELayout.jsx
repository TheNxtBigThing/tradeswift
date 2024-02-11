import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CircleNotifications, FireExtinguisher } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
// import { apple, github, g } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import TimeClock from "../widgets/TimeClock";
gsap.registerPlugin(ScrollTrigger);

const IDELayout = () => {
  useEffect(() => {
    window.onload = function () {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".asch", {
        scrollTrigger: {
          trigger: ".pallate",
          screenX: 100,
          yPercent: -100,
          duration: 5,
          markers: true,
          ease: "Power3.easeInOut",
        },
      });
    };
  }, []);

  return (
    <div className="idelayout text-xs  ">
      <div className="ide top-0 h-[20rem]">
        <motion.div className="asch right-20 top-40 dark:bg-zinc-800 dark:text-white bg-white rounded-2xl p-4 h-[22rem] w-[40rem]">
          <motion.div className="dots ">
            <motion.div className="flex gap-2">
              <div className="bg-blue-400 rounded-full p-2" />
              <div className="bg-red-400 rounded-full p-2" />
              <div className="bg-green-400 rounded-full p-2" />
            </motion.div>
          </motion.div>
          <div className="flex features w-82 bottom-0 rounded-lg mt-10">
            <div className=" flex relative flex-col h-full w-full">
              <div className="content rounded-3xl ">
                <div className=" nav flex items-center gap-8 text-xs font-bold  ">
                  <p className="dark:bg-zinc-700 bg-white px-2 pt-2 rounded-t-2xl">
                    Featured
                  </p>
                  <p>....</p>
                  <p>....</p>
                </div>
                <ul className="dark:bg-zinc-700 bg-white p-4 flex flex-col gap-4 rounded-b-3xl w-full shadow-2xl">
                  <li className="flex justify-between pt-2">
                    <p className="text-sm">Upload Documents</p>{" "}
                    <div className="toggle border-2 border-green-500 relative rounded-full p-1 w-10 flex items-center">
                      <DoneIcon data-aos="fade-in" data-aos-duration="2000" />
                    </div>
                  </li>
                  <li className=" flex justify-between">
                    <p className="text-sm">Make Payment</p>{" "}
                    <div className="toggle border-2 border-green-500 relative rounded-full p-1 w-10 flex items-center">
                      <DoneIcon data-aos="fade-in" data-aos-duration="4000" />
                    </div>
                  </li>
                  <li className=" flex justify-between">
                    <p className="text-sm">Track Application</p>{" "}
                    <div className="toggle border-2 border-green-500 relative rounded-full p-1 w-10 flex items-center">
                      <DoneIcon data-aos="fade-in" data-aos-duration="6000" />
                    </div>
                  </li>
                  <li className=" flex justify-between">
                    <p className="text-sm">Trademark Granted!</p>{" "}
                    <div className="toggle border-2 border-green-500 relative rounded-full p-1 w-10 flex items-center">
                      <DoneIcon data-aos="fade-in" data-aos-duration="8000" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="asch"></div>
      </div>
    </div>
  );
};

export default IDELayout;
