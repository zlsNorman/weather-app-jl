import { createContext, ReactElement, useContext, useState } from "react";
import { ApiResponseObj, Idispatcher, IWeather } from "../types/Weather";
import { useNavigate } from "react-router-dom";

interface WeatherContext {
  weather: ApiResponseObj | undefined;
  setWeather: React.Dispatch<React.SetStateAction<ApiResponseObj | undefined>>;
}

const WeatherContext = createContext({} as any);

export const useWeatherContext = (): any => {
  return useContext(WeatherContext);
};

export function WeatherProvider(props: {
  children: ReactElement;
}): ReactElement {
  const [weather, setWeather] = useState<IWeather>();
  const navigate = useNavigate();
  const dispatch = ({ city, data }: Idispatcher) => {
    setWeather({
      ...weather,
      [city.toLowerCase().trim()]: {
        timestamp: new Date(),
        ...data,
      },
    });
    console.log(weather, "TEST");
    navigate(`/${city.toLowerCase().trim()}`);
  };

  return (
    <WeatherContext.Provider value={{ weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
