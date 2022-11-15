// import "./App.css";

import Famrs from "./screens/Farms";
import Pools from "./screens/Pools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StakNav from "./components/StakNav";
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-slati h-screen">
        <StakNav />
        <div className="md:px-24 py-3 p-5">
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
