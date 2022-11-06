import React from "react";
import PoolsCard from "../components/PoolsCard/PoolsCard";
import TopFilter from "../components/TopFilter";
import { Link } from "react-router-dom";
const Pools = () => {
  return (
    <div>
      <div className="tabs md:w-1/5 mx-auto mb-2 tabs-boxed">
        <Link to="/" className="tab w-1/2 ">
          Farms
        </Link>
        <Link
          to="/Pools"
          className="tab w-1/2 bg-blue text-white custfont rounded"
        >
          Pools
        </Link>
      </div>
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
