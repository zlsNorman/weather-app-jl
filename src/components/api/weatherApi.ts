import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ApiResponseObj } from "../../types/Weather";
const apiKey = process.env.REACT_APP_API_KEY;

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
  callback: (value: SetStateAction<ApiResponseObj | undefined>) => void,
  errorCallback?: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  const leipzig = axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`,
    responseType: "json",
  })
    .then((res: AxiosResponse<ApiResponseObj>) => callback(res.data))
    .catch(
      (e) => errorCallback && errorCallback("wählen Sie eine gültige Stadt")
    );
}
