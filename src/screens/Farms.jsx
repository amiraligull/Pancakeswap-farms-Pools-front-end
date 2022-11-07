import React from "react";
import FarmsCard from "../components/FarmsCard/FarmsCard";
import TopFilter from "../components/TopFilter";
const Famrs = () => {
  return (
    <div>
      {/* <div className="tabs md:w-1/5 mb-2 mx-auto tabs-boxed">
        <Link to="/" className="tab w-1/2 bg-blue text-white custfont rounded">
          Farms
        </Link>
        <Link to="/Pools" className="tab w-1/2 ">
          Pools
        </Link>
      </div> */}
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
