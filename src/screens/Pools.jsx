import React from "react";
import PoolsCard from "../components/PoolsCard/PoolsCard";
import TopFilter from "../components/TopFilter";

const Pools = () => {
  return (
    <div>
      <TopFilter />
      <div className="md:flex flex-wrap">
        <PoolsCard />
        <PoolsCard />
        <PoolsCard />
      </div>
    </div>
  );
};

export default Pools;
