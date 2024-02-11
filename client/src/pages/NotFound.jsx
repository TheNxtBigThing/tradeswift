import React from "react";

const NotFound = () => {
  return (
    <div className="bg-black text-center pb-20">
      <div className="h-[90vh] w-[98vw] p-0 m-0 bg-black flex align-center justify-center">
        <img
          src="https://media1.tenor.com/m/IHdlTRsmcS4AAAAC/404.gif"
          alt=""
          className="p-0 m-0 security"
        />
      </div>
      <a href="/" className="text-white p-2 text-[1.5rem] pb-20">
        maybe go to home?
      </a>
    </div>
  );
};

export default NotFound;
