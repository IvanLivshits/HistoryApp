import { Routes, Route } from "react-router-dom";

import Header from "./Components/UI/header/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* Add homepage element here ex. <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
