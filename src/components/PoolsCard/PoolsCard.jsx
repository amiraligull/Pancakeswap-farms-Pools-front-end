import React from "react";
import pan from "../../assets/pan.png";
import bnb from "../../assets/bnb.png";
import Dropdown from "./Dropdown";
import Calculator from "../Calculator";

const PoolsCard = () => {
  return (
    <div className=" md:w-1/3 p-2 ">
      <div
        className="main border 
            border-blue rounded-[20px] 
              overflow-hidden shadow-lg  "
      >
        <div
          className="h-full  px-5 py-2 shadow-lg bg-blue flex flex-row
           justify-between items-center "
        >
          <div
            className="title flex flex-col custfont text-2xl 
          font-bold text-white "
          >
            Earn KRS
            <span className="text-sm font-thin">Stake CAKE</span>
          </div>

          <div className="farmImgescontainer">
            <img
              src={bnb}
              height={55}
              width={55}
              className="relative mt-[15px] -ml-1 z-0"
              alt="bnb"
            />
            <img
              src={pan}
              height={30}
              width={30}
              alt="pan"
              className="relative z-10 -mt-2 "
            />
          </div>
        </div>
        {/* apr container */}
        <div className="px-5">
          <div className="farmAprContainer  mt-4 flex flex-row justify-between items-center  ">
            <div className="farmApr custfont">APR:</div>
            <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
              <span className="flex gap-2 items-center text-purple">
                <s className="border-b-2 border-dotted custfont ">24.58%</s>

                <Calculator />
              </span>
            </div>
          </div>
          <hr />
          <span
            className="custfont text-blue text-[12px]
           font-semibold"
          >
            YIELD BOOSTER
          </span>
          <button
            className="w-full mb-2 rounded-full p-3 text-center text-white 
          custfont shadow-lg text-[1rem] bg-blue"
          >
            Connect wallet
          </button>
        </div>
        <br />
        <hr />
        <div className="px-5">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default PoolsCard;
