import { createContext, ReactElement, useContext, useState } from "react";
import { ApiResponseObj } from "../types/Weather";

interface WeatherContext {
  weather: ApiResponseObj | undefined;
  setWeather: React.Dispatch<React.SetStateAction<ApiResponseObj | undefined>>;
}

const WeatherContext = createContext({} as WeatherContext);

export const useWeatherContext = (): WeatherContext => {
  return useContext(WeatherContext);
};

export function WeatherProvider(props: {
  children: ReactElement;
}): ReactElement {
  const [weather, setWeather] = useState<ApiResponseObj>();

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
