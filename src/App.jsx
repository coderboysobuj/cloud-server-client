import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
