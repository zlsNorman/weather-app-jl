import axios from "axios";
import React, { ReactElement, useState } from "react";
import { useWeatherContext } from "../provider/WeatherProvider";
import { ApiResponseObj } from "../types/Weather";
import { useGetWeatherByApi } from "./api/weatherApi";
import WeatherForm from "./Form/WeatherForm";

export default function Weather(): ReactElement {
  const { weather, setWeather } = useWeatherContext();
  console.log(weather);
  return (
    <div className="border-4 border-white w-auto h-auto m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-4">
      {weather ? <div></div> : <WeatherForm />}
    </div>
  );
}
