import React from "react";
import StakToggel from "./StakToggel";
const TopFilter = () => {
  return (
    <div className="topfilter flex md:flex-row flex-col gap-2 justify-between items-center">
      <div className="staktoggel flex  gap-3 items-center">
        <StakToggel title="Staked only" />
        <StakToggel title="Booster Available" />
      </div>
      <div className="stakinputbox">
        <select className="select rounded-full select-bordered  w-full max-w-xs">
          <option disabled selected>
            SORT BY
          </option>
          <option>APR</option>
          <option>Multiplier</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilter;
