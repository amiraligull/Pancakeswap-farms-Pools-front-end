import "./App.css";

import Famrs from "./screens/Farms";
import Pools from "./screens/Pools";
function App() {
  return (
    <div className="App">
      <div className="md:p-24 p-5">
        <Famrs />
        <Pools />
      </div>
    </div>
  );
}

export default App;
