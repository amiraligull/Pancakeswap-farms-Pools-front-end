import React from "react";

const Daysbtn = ({ day, active }) => {
  return (
    <div>
      <button
        className={` md:w-[4.3rem] w-[3rem] p-1 font-bold rounded-full  ${
          active ? "bg-black text-white" : "text-[#00ffff] "
        } `}
      >
        {day}
      </button>
    </div>
  );
};

export default Daysbtn;
