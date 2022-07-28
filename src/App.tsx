import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import { ROUTE_HOME } from "./constants/routes";
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      {/* Add homepage element here ex. <Route index element={<Home />} /> */}
    </Routes>
  );
};

export default App;
