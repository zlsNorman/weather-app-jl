import { ReactElement } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import Weather from "./Weather";
import { WeatherProvider } from "../provider/WeatherProvider";
export default function Routes(): ReactElement {
  return (
    <RRDRoutes>
      <Route path="/" element={<Navigate to={"/weather"} />}></Route>
      <Route path="/weather" element={<Weather />}></Route>
    </RRDRoutes>
  );
}
