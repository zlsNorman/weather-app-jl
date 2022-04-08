import React, { useState } from "react";
import { useWeatherContext } from "../../provider/WeatherProvider";
import { getWeatherApi, useGetWeatherByApi } from "../api/weatherApi";
import Selection from "./Selection";

interface IformData {
  city: string;
  unit: string;
  lang: string;
}
export default function WeatherForm() {
  const { dispatch } = useWeatherContext();
  const [error, setError] = useState<string>();

  const [formData, setFormData] = useState<IformData>({
    city: "",
    unit: "metric",
    lang: "de",
  });

  const { city, unit, lang } = formData;

  const selectOptionsArr = [
    {
      key: "unit",
      label: "Unit",
      options: [
        {
          value: "metric",
          label: "Celsius",
        },
        {
          value: "imperial",
          label: "Fahrenheit",
        },
        {
          value: "standard",
          label: "Kelvin",
        },
      ],
    },
    {
      key: "lang",
      label: "Language",
      options: [
        {
          value: "de",
          label: "German",
        },
        {
          value: "en",
          label: "English",
        },
      ],
    },
  ];

  const handleInput = ({ name = "", value = "" }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city?.length > 1) {
      getWeatherApi(city, lang, unit, dispatch, setError);
    } else {
      setError("city needs at least 2 letters");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 flex-col">
            <label className="text-white">City</label>
            <input
              name="city"
              onChange={({ target: { name, value } }) =>
                handleInput({ name, value })
              }
              className={`px-1 border-2 ${error && "border-red-700"}`}
              type={"text"}
            ></input>
          </div>
          <div className="flex gap-2">
            {selectOptionsArr.map(({ key, label, options }) => (
              <div key={key} className="w-full flex flex-col gap-2">
                <label className="text-white">{label}</label>
                <select
                  name={key}
                  onChange={({ target: { name, value } }) =>
                    handleInput({ name, value })
                  }
                >
                  {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button type="submit" className="bg-white text-black">
            Search
          </button>
        </div>
      </form>
      <p className="text-red-700">{error && error}</p>
    </>
  );
}
