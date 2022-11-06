import "./App.css";

import Famrs from "./screens/Farms";
import Pools from "./screens/Pools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="md:p-24 p-5">
          <Routes>
            <Route path="/" element={<Famrs />} />
            <Route path="Pools" element={<Pools />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
