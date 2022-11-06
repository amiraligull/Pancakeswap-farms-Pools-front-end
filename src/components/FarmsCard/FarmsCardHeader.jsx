import React from "react";
import pan from "../../assets/pan.png";
import bnb from "../../assets/bnb.png";
import { IoRocket, IoShieldCheckmarkSharp } from "react-icons/io5";
const FarmsCardHeader = () => {
  return (
    <div>
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
              <span className="font-thine text-purple-500 custfont">Core</span>
            </div>
            <div
              className="p-1 shadow-lg rounded-full gap-2  flex md:flex-row justify-center items-center
                  border-2 border-cyan-500 w-[6rem]"
            >
              <IoRocket className="text-cyan-500" />
              <span className="font-thine text-cyan-500 custfont">Boosted</span>
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
    </div>
  );
};

export default FarmsCardHeader;
