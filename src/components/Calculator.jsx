import React from "react";
import {
  AiOutlineArrowDown,
  AiFillEdit,
  AiFillCalculator,
} from "react-icons/ai";
import Daysbtn from "./Daysbtn";
import CalculatorDropdown from "./CalculatorDropdown";

const Calculator = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal"
        className="btn p-0 m-0 border-none hover:bg-transparent bg-transparent"
      >
        <AiFillCalculator className="text-purple-900" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-transparent ">
          <div className="md:p-4">
            <div
              className="main rounded-[20px] 
              overflow-hidden shadow-lg bg-white "
            >
              <div
                className="h-full  px-5 py-2 shadow-lg bg-gray-300 flex flex-row
           justify-between items-center border"
              >
                <div className="title flex flex-col custfont text-xl font-bold text-purple-900 ">
                  ROI Calculator
                </div>

                <div className="farmImgescontainer">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-transparent text-purple-900 border-none hover:bg-transparent"
                  >
                    Close
                  </label>
                </div>
              </div>
              {/* apr container */}
              <div className="p-2 flex flex-col justify-start items-start">
                <span className="text-purple-500 custfont text-[12px] pl-2">
                  STAKED FOR
                </span>
                <div className="btn-group rounded-full border-2 p-1   overflow-hidden">
                  <Daysbtn day="1D" active="active" />
                  <Daysbtn day="7D" />
                  <Daysbtn day="30D" />
                  <Daysbtn day="1Y" />
                  <Daysbtn day="5Y" />
                </div>
              </div>

              <div className="p-2 flex flex-col">
                <span className="text-purple-500 custfont text-[12px] pl-2">
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
                  <div className="btn-group rounded-full border-2 p-1   overflow-hidden">
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

              <div className="rates flex border p-5 w-[80%] mx-auto rounded-[20px] flex-row justify-between items-center">
                <div className="values flex flex-col ">
                  <span className="custfont text-sm">ROI AT CURRENT RATES</span>
                  <span className="custfont text-lg font-extrabold">$0.00</span>
                  <span className="custfont text-[10px]">~ 0 MGP(0.00%)</span>
                </div>
                <div className="editicon">
                  <AiFillEdit className="text-4xl" />
                </div>
              </div>

              <br />
              <hr />
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
