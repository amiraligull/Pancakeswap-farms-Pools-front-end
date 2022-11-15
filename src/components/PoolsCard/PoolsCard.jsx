import React from "react";
import pan from "../../assets/pan.png";
import bnb from "../../assets/bnb.png";
import Dropdown from "./Dropdown";
import Calculator from "../Calculator";

const PoolsCard = () => {
  return (
    <div className=" md:w-1/3 p-2 ">
      <div
        className="main border rounded-[20px] 
              overflow-hidden shadow-inner shadow-[#00ffff] cardbg  "
      >
        <div
          className="h-full  px-5 py-2  bg-black  shadow-inner shadow-[#00ffff] flex flex-row
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
            <div className="farmApr custfont text-white">APR:</div>
            <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
              <span className="flex gap-2 items-center text-white">
                <s className="border-b-2 border-dotted custfont ">24.58%</s>

                <Calculator />
              </span>
            </div>
          </div>
          <hr className="text-white" />
          <span
            className="custfont text-[#00ffff] text-[12px]
           font-semibold"
          >
            YIELD BOOSTER
          </span>
          <button className="walletbtn">Connect wallet</button>
        </div>
        <br />
        <hr className="text-white" />
        <div className="px-5">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default PoolsCard;
