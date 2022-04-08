import React, { useState } from "react";
import { useWeatherContext } from "../../provider/WeatherProvider";
import { getWeatherApi, useGetWeatherByApi } from "../api/weatherApi";
import Selection from "./Selection";

export default function WeatherForm() {
  const { weather, setWeather } = useWeatherContext();
  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<string>();
  const [lang, setLang] = useState<string>();
  const [error, setError] = useState<string>();
  const unitObj = {
    label: "Unit",
    option: [
      ["metric", "Celsius"],
      ["imperial", "Fahrenheit"],
      ["standard", "Kelvin"],
    ],
  };
  const langObj = {
    label: "Language",
    option: [
      ["de", "de"],
      ["en", "en"],
    ],
  };
  const selections = [
    { value: unitObj, setter: setUnit, mandatory: true },
    { value: langObj, setter: setLang, mandatory: true },
  ];

  const formSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    city.length >= 2
      ? getWeatherApi(city, lang, unit, setWeather, setError)
      : setError("city needs at least 2 letters");
  };
  return (
    <>
      <form onSubmit={formSubmitted}>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 flex-col">
            <label className="text-white">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              className={
                error ? "border-red-700 px-1 border-2" : "px-1 border-2"
              }
              type={"text"}
            ></input>
          </div>
          <div className="flex gap-2">
            {selections.map((selectionObj) => (
              <Selection
                key={selectionObj.value.label}
                optionValue={selectionObj.value}
                mandatory={selectionObj.mandatory}
                callback={selectionObj.setter}
              />
            ))}
          </div>
          <button className="bg-white text-black">Search</button>
        </div>
      </form>
      <p className="text-red-700">{error && error}</p>
    </>
  );
}
