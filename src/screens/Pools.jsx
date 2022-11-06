import React from "react";
import PoolsCard from "../components/PoolsCard/PoolsCard";
import TopFilter from "../components/TopFilter";

const Pools = () => {
  return (
    <div>
      <div className="tabs w-1/5 mx-auto tabs-boxed">
        <a className="tab w-1/2 ">Farms</a>
        <a className="tab w-1/2 tab-active ">Pools</a>
      </div>

      <TopFilter />
      <div className=" flex flex-wrap ">
        <PoolsCard />
        <PoolsCard />
        <PoolsCard />
      </div>
    </div>
  );
};

export default Pools;
