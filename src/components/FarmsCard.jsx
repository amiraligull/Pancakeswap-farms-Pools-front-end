import React from "react";
import pan from "../assets/pan.png";
import bnb from "../assets/bnb.png";
import { IoRocket, IoShieldCheckmarkSharp } from "react-icons/io5";
import { AiFillCalculator, AiFillQuestionCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";

const FarmsCard = () => {
  return (
    // <div className="container px-5 py-24 mx-auto">
    //   <div className="flex flex-wrap -m-4">
    <div className=" md:w-1/3 p-2 ">
      <div
        className="main border px-5 py-2
            border-cyan-700 rounded-[20px] 
              overflow-hidden"
      >
        <div
          className="h-full  flex flex-row
           justify-evenly items-center "
        >
          <div className="farmImgescontainer">
            <img
              src={bnb}
              height={35}
              width={35}
              className="relative mt-[15px] -ml-1 z-0"
              alt="bnb"
            />
            <img
              src={pan}
              height={50}
              width={50}
              alt="pan"
              className="relative z-10 -mt-2 "
            />
          </div>
          <div className="farmTitleOptions flex-1 flex flex-col gap-2 justify-end items-end">
            <div className="title  custfont text-xl font-bold text-purple-900 ">
              CAKE-BNB
            </div>
            <div className="options flex flex-row gap-3 justify-evenly items-center">
              <div
                className="p-1 shadow-lg rounded-full gap-2  flex md:flex-row justify-center items-center
                  border-2 border-purple-500 w-[5rem]"
              >
                <IoShieldCheckmarkSharp className="text-purple-500" />
                <span className="font-thine text-purple-500 custfont">
                  Core
                </span>
              </div>
              <div
                className="p-1 shadow-lg rounded-full gap-2  flex md:flex-row justify-center items-center
                  border-2 border-cyan-500 w-[6rem]"
              >
                <IoRocket className="text-cyan-500" />
                <span className="font-thine text-cyan-500 custfont">
                  Boosted
                </span>
              </div>
              <div
                className="p-1 shadow-lg rounded-full  text-center
                  border-2  w-[3rem] bg-purple-900"
              >
                <span className="font-thine text-white custfont">25x</span>
              </div>
            </div>
          </div>
        </div>

        {/* apr container */}
        <div className="farmAprContainer mt-4 flex flex-row justify-evenly items-center  ">
          <div className="farmApr custfont">APR:</div>
          <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
            <span className="flex gap-2 custfont justify-center items-center">
              <IoRocket className="text-cyan-500 " />
              Up to48.41%
            </span>
            <span className="flex gap-2 items-center text-purple-900">
              <s className="border-b-2 border-dotted custfont ">24.58%</s>
              <AiFillCalculator className="text-purple-900" />
            </span>
          </div>
        </div>
        {/* end apr container */}

        {/* earn container */}
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
    //   </div>
    // </div>
  );
};

export default FarmsCard;
