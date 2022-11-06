import React from "react";

import { IoRocket } from "react-icons/io5";
import Calculator from "../Calculator";
const APR = () => {
  return (
    <div>
      <div className="farmAprContainer mt-4 flex flex-row justify-evenly items-center">
        <div className="farmApr custfont">APR:</div>
        <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
          <span className="flex gap-2 text-blue custfont justify-center items-center">
            <IoRocket className="text-blue " />
            Up to48.41%
          </span>
          <span className="flex gap-2 items-center text-purple">
            <s className="border-b-2 border-dotted custfont ">24.58%</s>
            {/* <AiFillCalculator className="text-purple" /> */}
            <Calculator />
          </span>
        </div>
      </div>
    </div>
  );
};

export default APR;
