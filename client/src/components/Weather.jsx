import React from "react";
import WeatherBox from "./WeatherBox";
import { useState, useEffect } from "react";

const Weather = () => {
  const dateOptions = {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const dateAsFormattedString = dateFormatter.format(new Date());
  const current_date = dateAsFormattedString;
  const [val, setVal] = useState("");
  const [data, setData] = useState({
    temp: "_",
  });

  const getWeatherByCordinates = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log(position.coords.latitude);
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=da9d79f0304b0a345bbfa7b59e0c5fd5`
          );
          const data = await res.json();
          console.log(data);
          setData({
            temp: data.main.temp.toFixed(1) + "°C",
            icon: data.weather[0].icon,
          });
        },
        (error) => {
          window.alert("Can't fetch your location. Please allow.");
        }
      );
    } else {
      window.alert("Geo Location is not supported by browser");
    }
  };

  useEffect(() => {
    getWeatherByCordinates();
  }, []);

  return <WeatherBox temp={data} icon={data} />;
};

export default Weather;
