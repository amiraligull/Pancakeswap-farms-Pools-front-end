import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";
import FarmsCardHeader from "./FarmsCardHeader";
import APR from "./APR";
const FarmsCard = () => {
  return (
    <div className=" md:w-1/3 p-2 ">
      <div
        className="main border px-5 py-2
            border-cyan-700 rounded-[20px] 
              overflow-hidden"
      >
        <FarmsCardHeader />
        <APR />
        <div
          className="farmAprContainer 
        mt-2 flex flex-row justify-center items-center
        md:w-[80%]  mx-auto md:pl-2  pl-7"
        >
          <div className="farmApr flex-1 custfont font-thin">Earn:</div>
          <div className=" flex-1 custfont font-bold text-purple-900">
            CAKE + Fees
          </div>
        </div>
        {/* end earn container */}
        <hr />
        <span className="custfont mt-2 text-[12px] font-bold">CAKE EARNED</span>
        {/* harvest value */}
        <div
          className="harVestContainer mt-2 flex flex-row justify-center items-center
        md:w-[80%]  mx-auto md:pl-2  pl-7"
        >
          <div className="farmApr flex-1 text-gray-500 text-2xl custfont font-extrabold">
            0.00000
          </div>
          <div className=" flex-1 ">
            <button className="bg-gray-200 shadow-lg p-2 text-gray-500 px-4 rounded-full font-extrabold">
              Harvest
            </button>
          </div>
        </div>
        {/* end harvest value */}
        <span className="custfont text-[#A39AC4] text-[12px] font-semibold">
          YIELD BOOSTER
        </span>
        {/* tooltip value */}
        <div className="tooltipContainer flex flex-col gap-1 justify-start items-start">
          <div className="toolkit flex items-center gap-2">
            <span className="custfont text-lg font-extrabold text-[#503A7C]">
              Up to 2x
            </span>
            <div className="tooltip" data-tip="hello">
              <AiFillQuestionCircle className="text-purple-900" />
            </div>
          </div>

          <span className="custfont text-[13px] text-cyan-600">
            Connect wallet to activate yield booster
          </span>
          <p className="custfont font-semibold text-[14px]">
            <span className="text-purple-900"> CAKE-BNB LP</span> STAKED
          </p>
        </div>
        {/* end tooltip value */}
        <button className="w-full mb-2 rounded-full p-3 text-center text-white custfont shadow-lg text-[1rem] bg-blue-500">
          Connect wallet
        </button>
        <br />

        <hr />
        {/* dropdown start */}
        <Dropdown />
        {/* end  dropdown start */}
      </div>
    </div>
  );
};

export default FarmsCard;
