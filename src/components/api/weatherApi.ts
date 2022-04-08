import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ApiResponseObj } from "../../types/Weather";
//const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "9f2141a232300101f79caee3666930e8";

export function useGetWeatherByApi(
  city: string,
  lang = "de",
  units = "metric"
): [
  ApiResponseObj | undefined,
  Dispatch<SetStateAction<ApiResponseObj | undefined>>
] {
  const [data, setData] = useState<ApiResponseObj>();
  useEffect(() => {
    getWeatherApi(city, lang, units, setData);
  }, [city, lang, units]);

  return [data, setData];
}

export function getWeatherApi(
  city: string,
  lang = "de",
  units = "metric",
  dispatch: (value: SetStateAction<any | undefined>) => void,
  errorCallback?: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`,
    responseType: "json",
  })
    .then((res: AxiosResponse<any>) => dispatch({ city, data: res.data }))
    .catch((e) => {
      errorCallback && errorCallback("no valid city");
    });
}
