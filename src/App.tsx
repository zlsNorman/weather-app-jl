import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Routes from "./components/Routes";
import { WeatherProvider } from "./provider/WeatherProvider";

function App() {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <Layout>
          <Routes />
        </Layout>
      </WeatherProvider>
    </BrowserRouter>
  );
}

export default App;
