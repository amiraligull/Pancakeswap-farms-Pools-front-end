import "./App.css";
import FarmsCard from "./components/FarmsCard";
import TopFilter from "./components/TopFilter";
function App() {
  return (
    <div className="App">
      <div className="md:p-24 p-5">
        <TopFilter />
        <div className=" flex flex-wrap ">
          <FarmsCard />
          <FarmsCard />
          <FarmsCard />
        </div>
      </div>
    </div>
  );
}

export default App;
