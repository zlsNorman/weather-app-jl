import { ReactElement } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import Weather from "./Weather";
import { WeatherProvider } from "../provider/WeatherProvider";
import WeatherDetails from "./WeatherDetails";

export default function Routes(): ReactElement {
  return (
    <WeatherProvider>
      <RRDRoutes>
        <Route path="/" element={<Weather />} />
        <Route path="/:city" element={<WeatherDetails />}></Route>
      </RRDRoutes>
    </WeatherProvider>
  );
}
