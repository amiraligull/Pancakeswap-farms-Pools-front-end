import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const StakNav = () => {
  return (
    <div className="navbar md:px-[5rem] ">
      <div className="flex-1">
        <Link
          onClick={() => window.open("https://venify.finance/")}
          className=" normal-case "
        >
          <img src={logo} alt="logo" width={200} />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 p-0">
          <li className="bg-black text-white shadow-inner shadow-[#00ffff] rounded-lg">
            <Link to="/">Farms</Link>
          </li>
          <li className="bg-black text-white shadow-inner shadow-[#00ffff] rounded-lg">
            <Link to="/Pools">Pools</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StakNav;
