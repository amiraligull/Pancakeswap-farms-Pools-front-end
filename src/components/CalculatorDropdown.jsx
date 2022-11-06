import React from "react";
import useCollapse from "react-collapsed";
import { HiOutlineExternalLink } from "react-icons/hi";

const CalculatorDropdown = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div
        className="  rounded p-2 h-16 bg-purple text-center text-white custfont font-semibold "
        {...getToggleProps()}
      >
        {isExpanded ? "Hide" : "Details"}
      </div>
      <div {...getCollapseProps()}>
        <div className="px-8">
          <div className="liquadityvalue flex flex-row justify-between items-center">
            <div className="ltitle  custfont">APR:</div>
            <div className="lvalue  custfont">9.96%</div>
          </div>
          <p className="text-sm text-gray-800">
            Calculated based on current rates. All figures are estimates
            provided for your convenience only, and by no means represent
            guaranteed returns.
          </p>
          <span className="custfont text-right text-sm  flex gap-1 justify-center items-center text-blue-500">
            View Contract <HiOutlineExternalLink />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDropdown;
