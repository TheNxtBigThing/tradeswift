import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { officeview } from "../assets";
import Login from "../components/Login";
import Register from "../components/Registration";
import useMediaQuery from "@mui/material/useMediaQuery";

const Authentication = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  const { parameter } = useParams(); // Get the parameter from the URL
  console.log(parameter);
  let componentToRender;

  // Determine which component to render based on the parameter
  if (parameter === "login") {
    componentToRender = <Login />;
  } else if (parameter === "register") {
    componentToRender = <Register />;
  } else {
    // Render default component (SignIn or whichever is your default)
    componentToRender = <Login />; // Change this to the default component you want to render
  }

  return (
    <div className="auth relative flex md:justify-end justify-center items-center gap-8">
      <div className="auth">{componentToRender}</div>
      {isNonMobileScreen && (
        <div className="banner">
          <div className="w-[59.9vw] h-screen overflow-hidden ">
            <img
              src={officeview}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
