import React from "react";
import { useWeatherContext } from "../provider/WeatherProvider";
import LoadingSpinner from "./LoadingSpinner";

export default function WeatherDetails() {
  const { weather, setWeather } = useWeatherContext();

  if (!weather) return <LoadingSpinner />;
  console.log(weather);

  return (
    <div>
      <div className="text-white flex flex-col">
        <span>Name</span> {weather.name}
      </div>
      <div className="text-white flex flex-col">
        <span>Country</span>
        {weather.sys.country}
      </div>
      <div className="text-white flex flex-col">
        <span>Latitude</span>
        {weather.coord.lat}
      </div>
      <div className="text-white flex flex-col">
        <span>Longitude</span>
        {weather.coord.lon}
      </div>
      <div className="text-white flex flex-col">
        <span>Clouds in %</span>
        {weather.clouds.all}
      </div>
      <div className="text-white flex flex-col">
        <span>Temperatur</span>
        {weather.main.temp}
      </div>
      <div className="text-white flex flex-col">
        <span>Min</span>
        {weather.main.temp_min}
      </div>
      <div className="text-white flex flex-col">
        <span>Max</span>
        {weather.main.temp_max}
      </div>
      <button
        className="bg-white text-black p-2  w-full"
        onClick={(e) => setWeather(undefined)}
      >
        Back
      </button>
    </div>
  );
}
