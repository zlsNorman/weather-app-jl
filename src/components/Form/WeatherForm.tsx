import React, { useState } from "react";
import { useWeatherContext } from "../../provider/WeatherProvider";
import { getWeatherApi, useGetWeatherByApi } from "../api/weatherApi";
import Selection from "./Selection";

export default function WeatherForm() {
  const data = useGetWeatherByApi("leipzig");
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
  if (!data) {
    return <div>Loading...</div>;
  }

  const formSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeatherApi(city, lang, unit, setWeather, setError);
  };
  return (
    <>
      <form onSubmit={formSubmitted}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 flex-col">
            <label className="text-white">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="px-1"
              type={"text"}
            ></input>
          </div>
          <div className="flex gap-2">
            <Selection
              optionValue={unitObj}
              mandatory={true}
              callback={setUnit}
            />
            <Selection
              optionValue={langObj}
              mandatory={true}
              callback={setLang}
            />
          </div>
          <button className="bg-white text-black">Search</button>
        </div>
      </form>
      <p className="text-red-700">{error && error}</p>
    </>
  );
}
