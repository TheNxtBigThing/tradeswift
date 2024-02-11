import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import AdminAuth from "./AdminAuth";
import AdminContent from "./AdminContent";

import admin from "../assets/admin_page.png";

const Admin = () => {
  return (
    <>
      <AdminAuth />
      <div className="onlyForAdmin flex justify-center align-center items-center p-0 m-0">
        <div className="w-1/6 bg-sky-300 dark:bg-sky-600 h-screen sticky top-0 p-0 m-0">
          <div className="text-center p-5 mt-2">
            <img src={admin} className="w-10" />
            <h1 className="p-5 text-2xl">
              <b>Admin Page</b>
            </h1>
          </div>
          <div className="flex flex-col text-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png"
              className="w-10 mt-10 rounded-full"
            />
            <h1 className="text-lg mt-5">
              hey, <b>Admin!</b>
            </h1>
            <hr className="h-1 bg-black w-10 mt-5" />
            <NavLink
              to="#new"
              className="mt-8 text-lg cursor-pointer mb-5 hover:opacity-100 opacity-50"
            >
              New Applications
            </NavLink>
            <NavLink
              to="#approved"
              className="text-lg cursor-pointer mb-5 hover:opacity-100 opacity-50"
            >
              Approved Applications
            </NavLink>
            <NavLink
              to="#rejected"
              className="text-lg cursor-pointer mb-5 hover:opacity-100 opacity-50"
            >
              Rejected Applications
            </NavLink>
            <NavLink
              to="#download"
              className="text-lg cursor-pointer mb-5 hover:opacity-100 opacity-50"
            >
              Report Download
            </NavLink>
            <NavLink
              to="#stats"
              className="text-lg cursor-pointer mb-5 hover:opacity-100 opacity-50"
            >
              Statistics
            </NavLink>
            <NavLink to="/">
              <button className="text-lg mt-8 bg-sky-900 p-3 rounded-lg text-white">
                log out
              </button>
            </NavLink>
          </div>
        </div>

        <div className="ml-[5rem] w-[90vw] pt-0 mt-[-45rem]">
          <AdminContent />
        </div>
      </div>
    </>
  );
};

export default Admin;
