import React, { useState } from "react";
import { fe_assets } from "@/assets/frontend_assets/assets";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="py-5 flex justify-around items-center">
      <p className="w-36 font-extrabold text-4xl text-red-500 pt-2">YIPEE !</p>
      {/* <img src={assets.logo} alt="Logo" className="w-36" /> */}
      <ul className="flex list-none gap-5 text-lg mt-3 font-semibold">
        <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
          Home
        </li>
        <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
          Menu
        </li>
        <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
          Mobile App
        </li>
        <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-10 mt-2">
        <img
          src={fe_assets.search_icon}
          alt="Search Icon"
          className="w-5 h-5 cursor-pointer"
        />
        <div className="relative">
          <img
            src={fe_assets.basketIcon}
            alt="Basket Icon"
            className="w-9 h-9 cursor-pointer"
          />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full "></div>
        </div>
        <Button
          variant="secondary"
          className=" bg-red-500 text-white hover:bg-red-600 rounded-3xl h-8"
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
