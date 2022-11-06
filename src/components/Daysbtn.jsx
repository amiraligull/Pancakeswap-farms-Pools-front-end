import React from "react";

const Daysbtn = ({ day, active }) => {
  return (
    <div>
      <button
        className={` md:w-[4.3rem] w-[3rem] p-1 font-bold rounded-full  ${
          active ? "bg-blue text-white" : "text-blue "
        } `}
      >
        {day}
      </button>
    </div>
  );
};

export default Daysbtn;
