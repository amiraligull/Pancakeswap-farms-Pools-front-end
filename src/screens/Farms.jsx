import React from "react";
import FarmsCard from "../components/FarmsCard/FarmsCard";
import TopFilter from "../components/TopFilter";
const Famrs = () => {
  return (
    <div>
      <div className="tabs w-1/5 mx-auto tabs-boxed">
        <a className="tab w-1/2 tab-active">Farms</a>
        <a className="tab w-1/2 ">Pools</a>
      </div>

      <TopFilter />
      <div className=" flex flex-wrap ">
        <FarmsCard />
        <FarmsCard />
        <FarmsCard />
      </div>
    </div>
  );
};

export default Famrs;
