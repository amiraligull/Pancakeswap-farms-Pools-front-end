import React from "react";
import {
  AiOutlineArrowDown,
  AiFillEdit,
  AiFillCalculator,
} from "react-icons/ai";
import Daysbtn from "./Daysbtn";
import CalculatorDropdown from "./CalculatorDropdown";
import { BsArrowDownUp } from "react-icons/bs";

const Calculator = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal"
        className="btn p-0 m-0 border-none hover:bg-transparent bg-transparent"
      >
        <AiFillCalculator className="text-white" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  m-0 w-full bg-transparent ">
          <div className="md:p-4">
            <div
              className="main rounded-[20px] 
              overflow-hidden  shadow-inner shadow-[#00ffff] cardbg"
            >
              <div
                className="h-full  px-5 py-2 shadow-inner shadow-[#00ffff] bg-black flex flex-row
           justify-between items-center "
              >
                <div className="title flex flex-col custfont text-lg font-bold text-white ">
                  ROI Calculator
                </div>

                <div className="farmImgescontainer">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-slati shadow-inner shadow-[#00ffff]   border-none hover:bg-transparent"
                  >
                    Close
                  </label>
                </div>
              </div>

              <div className="mainvalue  mx-atuo p-4 ">
                <span className="pl-1 custfont text-sm"> CAKE STAKED</span>
                <div className="flex flex-col  p-4 rounded border-[#00ffff] border bg-black">
                  <div
                    className="inputValue   
                   flex flex-row justify-end items-center"
                  >
                    <input
                      type="text"
                      placeholder="0.00USD"
                      className=" text-xl w-full max-w-xs bg-transparent text-white border-none"
                    />
                    <BsArrowDownUp className="text-[#00ffff] " />
                  </div>
                  <span className="pl-4 custfont text-[#00ffff] text-sm">
                    0.00 CAKE
                  </span>
                </div>
              </div>
              {/* apr container */}
              <div className="p-2 flex flex-col justify-start items-start">
                <span className="text-white custfont text-[12px] pl-2">
                  STAKED FOR
                </span>
                <div className="btn-group rounded-full border-2 border-[#00ffff] p-1   overflow-hidden">
                  <Daysbtn day="1D" active="active" />
                  <Daysbtn day="7D" />
                  <Daysbtn day="30D" />
                  <Daysbtn day="1Y" />
                  <Daysbtn day="5Y" />
                </div>
              </div>

              <div className="p-2 flex flex-col">
                <span className="text-white custfont text-[12px] pl-2">
                  COMPOUNDING EVERY
                </span>
                <div className="compoundbar flex flex-row justify-start gap-3">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked
                        className="checkbox checkbox-info"
                      />
                    </label>
                  </div>
                  <div className="btn-group rounded-full border-2 border-[#00ffff] p-1   overflow-hidden">
                    <Daysbtn day="1D" active="active" />
                    <Daysbtn day="7D" />
                    <Daysbtn day="14D" />
                    <Daysbtn day="30D" />
                  </div>
                </div>
              </div>

              <div className=" flex felx-col justify-center items-center">
                <AiOutlineArrowDown className="text-4xl" />
              </div>

              <div
                className="rates flex border border-[#00ffff] p-5 
                w-[80%] bg-black mx-auto rounded-[20px]
               flex-row justify-between items-center"
              >
                <div className="values flex flex-col ">
                  <span className="custfont text-sm">ROI AT CURRENT RATES</span>
                  <span className="custfont text-lg text-[#00ffff] font-extrabold">
                    $0.00
                  </span>
                  <span className="custfont text-[10px]">~ 0 MGP(0.00%)</span>
                </div>
                <div className="editicon">
                  <AiFillEdit className="text-4xl text-[#00ffff]" />
                </div>
              </div>

              <br />
              {/* <hr /> */}
              <div className="">
                <CalculatorDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
