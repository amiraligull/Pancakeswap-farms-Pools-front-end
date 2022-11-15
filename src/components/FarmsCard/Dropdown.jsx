import React from "react";
import useCollapse from "react-collapsed";
import { HiOutlineExternalLink } from "react-icons/hi";

const Dropdown = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div
        className="  rounded p-2  text-center text-[#00ffff] custfont font-semibold "
        {...getToggleProps()}
      >
        {isExpanded ? "Hide" : "Details"}
      </div>
      <div {...getCollapseProps()}>
        <div className="">
          <div className="liquadityvalue flex flex-row justify-between items-center">
            <div className="ltitle  custfont text-white">Total Liquidity:</div>
            <div className="lvalue  custfont text-white">$198,946,962</div>
          </div>
          <div className="l-links flex flex-col justify-start">
            <span className="custfont text-sm flex gap-1 items-center text-[#00ffff]">
              Get CAKE-BNB LP <HiOutlineExternalLink />
            </span>
            <span className="custfont text-sm flex gap-1 items-center text-[#00ffff]">
              View Contract <HiOutlineExternalLink />
            </span>
            <span className="custfont text-sm flex gap-1 items-center text-[#00ffff]">
              See Pair Info <HiOutlineExternalLink />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
