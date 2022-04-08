import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useWeatherContext } from "../provider/WeatherProvider";
import { getWeatherApi } from "./api/weatherApi";
import LoadingSpinner from "./LoadingSpinner";

export default function WeatherDetails() {
  const { weather, dispatch } = useWeatherContext();
  const { city } = useParams();

  //TODO wenn React Query uo to date ist umbauen damit es mit dem Storage verknüpft ist
  if (!city) {
    return <LoadingSpinner />;
  }
  if (!weather) {
    getWeatherApi(city, "de", "metric", dispatch);
    return <LoadingSpinner />;
  }

  const weatherr = weather[city];
  return (
    <div className="border-4 border-white w-auto h-auto m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-4">
      <div className="text-white flex flex-col">
        <span>Name</span> {weatherr.name}
      </div>
      <div className="text-white flex flex-col">
        <span>Country</span>
        {weatherr.sys.country}
      </div>
      <div className="text-white flex flex-col">
        <span>Latitude</span>
        {weatherr.coord.lat}
      </div>
      <div className="text-white flex flex-col">
        <span>Longitude</span>
        {weatherr.coord.lon}
      </div>
      <div className="text-white flex flex-col">
        <span>Clouds in %</span>
        {weatherr.clouds.all}
      </div>
      <div className="text-white flex flex-col">
        <span>Temperatur</span>
        {weatherr.main.temp}
      </div>
      <div className="text-white flex flex-col">
        <span>Min</span>
        {weatherr.main.temp_min}
      </div>
      <div className="text-white flex flex-col">
        <span>Max</span>
        {weatherr.main.temp_max}
      </div>
      <Link to={"/"} className="bg-white text-black w-full">
        Back
      </Link>
    </div>
  );
}
