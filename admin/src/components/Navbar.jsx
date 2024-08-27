import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-3 flex justify-between items-center mx-auto max-w-screen-xl">
      <Link to="/">
        <p className="w-36 font-extrabold text-4xl text-red-500 pt-2">
          YIPEE !
        </p>
      </Link>

      <div>
        <img src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
