import React from "react";
import paperwork from "../assets/paperwork.jpg";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <>
      <div className="w-[99vw] h-[80vh] flex justify-evenly align-center items-center p-3 bg-[#fff] dark:bg-dark">
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={logo} alt="" />
        </div>
        <img
          src={paperwork}
          alt=""
          className="w-[40vw] p-0 m-0 rounded-lg"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
      </div>

      <a href="#cut">
        <center className="pb-10 cursor-pointer ">
          <KeyboardArrowDownIcon />
        </center>
      </a>

      <div
        className="bg-[#F5F7F8] w-[99vw] h-[70vh] flex justify-center align-center items-center text-center dark:bg-blue-900 linear linear-ease"
        data-aos="fade-left"
        id="cut"
      >
        <div className="p-5">
          <h2 className="font-['montserrat'] text-[2.2rem] text-sky-600 dark:text-sky-300 mb-4">
            Cut 50%<sup>*</sup> of your time for getting a{" "}
            <u>
              <b>Trademark</b>
            </u>
          </h2>
          <p className="pt-10 w-[60vw] font-['montserrat'] text-lg">
            <i>
              Presenting <b>"TradeSwift - hassle free Trademarks"</b> a one stop
              platform where you can Apply, Pay, Track, and get Trademark. Let
              it be your company, start-up, franchise, or some intellectual work
              we got you covered
            </i>
            .
          </p>
          <a href="/auth/login">
            <button className="rounded-lg bg-sky-500 text-white mt-10 p-4 dark:">
              Get Started 🚀
            </button>
          </a>
        </div>
      </div>

      <a href="#beat">
        <center className="pb-10 cursor-pointer bg-[#F5F7F8]">
          <KeyboardArrowDownIcon />
        </center>
      </a>

      <div
        className="bg-[#fff] w-[99vw] h-[70vh] flex justify-center align-center items-center text-center dark:bg-dark"
        data-aos="fade-right"
        id="beat"
      >
        <div className="p-5">
          <h2 className="font-['montserrat'] text-[2.2rem] text-sky-600 dark:text-sky-300 mb-4 text-center">
            Never miss a beat...
          </h2>
          <div className="flex align-center items-center justify-center text-center mt-20">
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">1</h2>
              <p className="text-[1.5rem] pt-5">Authenticate yourself</p>
            </div>
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">2</h2>
              <p className="text-[1.5rem] pt-5">Fill Application</p>
            </div>
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">3</h2>
              <p className="text-[1.5rem] pt-5">Upload Documents</p>
            </div>
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">4</h2>
              <p className="text-[1.5rem] pt-5">Do Payment</p>
            </div>
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">5</h2>
              <p className="text-[1.5rem] pt-5">Approved by Admin</p>
            </div>
            <div className="w-10vw h-10vh p-5">
              <h2 className="text-[2rem]">6</h2>
              <p className="text-[1.5rem] pt-5">You just got TM!</p>
            </div>
          </div>
        </div>
      </div>

      <a href="#pricing">
        <center className="pb-10 cursor-pointer bg-[#fff]">
          <KeyboardArrowDownIcon />
        </center>
      </a>

      <div
        className="bg-[#F5F7F8] w-[99vw] h-[70vh] flex justify-center align-center items-center text-center dark:bg-blue-900"
        data-aos="fade-right"
        id="pricing"
      >
        <div className="p-5">
          <h2 className="font-['montserrat'] text-[2.2rem] text-sky-600 dark:text-sky-300 mb-4 text-center pb-10">
            Pricing
          </h2>
          <div className="h-[15rem] bg-zinc-600 rounded-lg w-[25vw] flex flex-col justify-center items-center">
            <h3 className="text-[5rem] font-['montserrat'] text-white text-bold">
              4500₹
            </h3>
            <h2 className="mt-5 text-white pt-10 text-[2rem]">only</h2>
          </div>
        </div>
      </div>

      <a href="#awesome">
        <center className="pb-10 cursor-pointer bg-[#F5F7F8]">
          <KeyboardArrowDownIcon />
        </center>
      </a>

      <div
        className="bg-[#fff] w-[99vw] h-[70vh] flex justify-center align-center items-center text-center dark:bg-dark"
        data-aos="fade-left"
        id="awesome"
      >
        <div className="p-5">
          <h2 className="font-['montserrat'] text-[2.2rem] text-sky-600 dark:text-sky-300 mb-4 text-center">
            Get your Awesome Trademark Now!
          </h2>
          <p className="pt-10 w-[60vw] font-['montserrat'] text-lg">
            We are way ahead of our competitors.
          </p>
          <a href="/auth/login">
            <button className="rounded-lg bg-sky-500 text-white mt-10 p-4">
              Get Started 🚀
            </button>
          </a>
          <a href="/contact">
            <button className="rounded-lg border-2 border-sky-500 text-sky-500 mt-10 p-4 ml-5 dark:text-sky-200">
              Contact Us 📞
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
