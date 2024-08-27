import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen   rounded-lg  p-4 md:w-1/4 sm:w-1/3">
      <div className="pt-12 flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2.5 rounded-lg cursor-pointer ${
              isActive
                ? "bg-red-400 border-1 border-red-600 text-white"
                : "bg-white border"
            }`
          }
        >
          <img src={assets.add_icon} alt="Add Items" />
          <p className="text-base sm:text-sm custom:text-xs hidden rs:block">
            ADD ITEMS
          </p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2.5 rounded-lg cursor-pointer ${
              isActive
                ? "bg-red-400 border-1 border-red-600 text-white"
                : "bg-white border"
            }`
          }
        >
          <img src={assets.order_icon} alt="List Items" />
          <p className="text-base sm:text-sm custom:text-xs hidden rs:block">
            LIST ITEMS
          </p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2.5 rounded-lg cursor-pointer ${
              isActive
                ? "bg-red-400 border-1 border-red-600 text-white"
                : "bg-white border"
            }`
          }
        >
          <img src={assets.order_icon} alt="Orders" />
          <p className="text-base sm:text-sm custom:text-xs hidden rs:block">
            ORDERS
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
