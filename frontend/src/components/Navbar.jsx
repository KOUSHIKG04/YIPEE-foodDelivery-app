import React, { useContext } from "react";
import { fe_assets } from "@/assets/frontend_assets/assets";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { StoreContext } from "@/context/StoreContext";

const Navbar = ({ setLogin, footerRef }) => {
  const { getTotal } = useContext(StoreContext);

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-5 flex justify-around items-center">
      <Link to="/">
        <p className="w-36 font-extrabold text-4xl text-red-500 pt-2">
          YIPEE !
        </p>
      </Link>
      <ul className="hidden md:flex list-none gap-5 text-lg mt-3 font-semibold">
        <Link to="/">
          <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/">
          <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
            Menu
          </li>
        </Link>
        <li className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer">
          Mobile App
        </li>
        <li
          className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer"
          onClick={scrollToFooter}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <img
          src={fe_assets.search_icon}
          alt="Search Icon"
          className="w-5 h-5 cursor-pointer"
        />
        <div className="relative">
          <Link to="/cart">
            <img
              src={fe_assets.basketIcon}
              alt="Basket Icon"
              className="w-9 h-9 cursor-pointer"
            />
          </Link>
          {getTotal() === 0 ? null : (
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          )}
        </div>
        <div>
          <Button
            variant="secondary"
            className="bg-red-500 text-white hover:bg-red-600 rounded-3xl h-8"
            onClick={() => setLogin(true)}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
