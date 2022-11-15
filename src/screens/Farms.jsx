import React from "react";
import FarmsCard from "../components/FarmsCard/FarmsCard";
import TopFilter from "../components/TopFilter";
const Famrs = () => {
  return (
    <div>
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
