import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Routes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
