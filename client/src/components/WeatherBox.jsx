import React from "react";

const WeatherBox = ({ temp, icon }) => {
  const url = `https://openweathermap.org/img/wn/${icon.icon}.png`;
  console.log(url);
  return (
    <>
      <div className="card-container">
        <div className="flex justify-center items-center text-center select-none">
          <img src={url} alt="" className="p-0 m-0"/>
          <p>{temp.temp}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
