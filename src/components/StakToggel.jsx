import React from "react";

const stakToggel = ({ title }) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" className="toggle toggle-success" />
      <span className="custfont font-semibold text-md">{title}</span>
    </div>
  );
};

export default stakToggel;
