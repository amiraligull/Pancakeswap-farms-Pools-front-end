import React from "react";
import useCollapse from "react-collapsed";
import { HiOutlineExternalLink } from "react-icons/hi";
import Calculator from "../Calculator";
import { BiTimer } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";

const Dropdown = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div
        className="  rounded p-2  flex flex-row justify-between text-center text-purple custfont font-semibold "
        {...getToggleProps()}
      >
        <div className="menual">
          <div
            className="p-1 shadow-lg rounded-full gap-2  flex md:flex-row justify-center items-center
                  border-2 border-[#00ffff] w-[6rem]"
          >
            <span className="font-thine text-[#00ffff] custfont">Menual</span>
            <AiOutlineReload className="text-white" />
          </div>
        </div>
        <div className="togal text-white">
          {isExpanded ? "Hide" : "Details"}
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="">
          <div className="liquadityvalue flex flex-row justify-between items-center">
            <div className="ltitle text-white  custfont">APR:</div>
            <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
              {/* <span className="flex gap-2 items-center text-purple-900"> */}
              <span className="border-b-2 border-dotted custfont text-white ">
                24.58%
              </span>
              <Calculator />
              {/* </span> */}
            </div>
          </div>
          <div className="liquadityvalue flex flex-row justify-between items-center">
            <div className="ltitle  custfont text-white">Total staked:</div>
            <div className="lvalue  custfont text-white">5,040,724 ROB</div>
          </div>
          <div className="l-links flex flex-row justify-between ">
            <div className="custfont text-white">Ends in:</div>
            <div>
              <span className="custfont text-right text-sm flex mt-2 gap-1 justify-end items-center text-[#00ffff]">
                3,202,910 blocks
                <BiTimer />
              </span>
              <span className="custfont text-right text-sm flex gap-1 justify-end items-center text-[#00ffff]">
                Get CAKE-BNB LP <HiOutlineExternalLink />
              </span>
              <span className="custfont text-right text-sm flex gap-1 justify-end items-center text-[#00ffff]">
                View Contract <HiOutlineExternalLink />
              </span>
              <span className="custfont text-sm text-right flex gap-1 justify-end items-center text-[#00ffff]">
                See Pair Info <HiOutlineExternalLink />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
