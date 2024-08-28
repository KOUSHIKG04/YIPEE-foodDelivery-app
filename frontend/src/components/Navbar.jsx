import React, { useContext, useState } from "react";
import { fe_assets } from "@/assets/frontend_assets/assets";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "@/context/StoreContext";

const Navbar = ({ setLogin, footerRef }) => {
  const navigate = useNavigate();

  const { getTotal, token, setToken } = useContext(StoreContext);

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="py-5 flex justify-around items-center">
      <Link to="/">
        <p className="w-36 font-extrabold text-4xl text-red-500 pt-2">
          YIPEE !
        </p>
      </Link>
      <ul className="hidden md:flex list-none gap-5 text-lg mt-3 font-semibold">
        <a
          href="#home"
          className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer"
        >
          Home
        </a>

        <a
          href="#explore-menu"
          className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer"
        >
          Menu
        </a>
        <a
          href="#app-download"
          className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-red-400 cursor-pointer"
        >
          Mobile App
        </a>
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
          {!token ? (
            <Button
              variant="secondary"
              className="bg-red-500 text-white hover:bg-red-600 rounded-3xl h-8"
              onClick={() => setLogin(true)}
            >
              SIGN UP
            </Button>
          ) : (
            <div className="relative">
              <img
                src={fe_assets.profile_icon}
                alt="Profile"
                onClick={toggleDropdown}
                className="cursor-pointer"
              />
              {dropdown && (
                <ul className="absolute right-0 z-10 flex flex-col gap-2 bg-[#fff2ef] rounded-lg p-3 outline outline-2 outline-white list-none mt-4 w-48">
                  <li className="flex items-center gap-2 cursor-pointer ml-2 hover:text-red-500">
                    <img
                      className="w-5 h-5"
                      src={fe_assets.bag_icon}
                      alt="Orders"
                    />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li
                    onClick={logout}
                    className="flex items-center gap-2 cursor-pointer ml-2 hover:text-red-500"
                  >
                    <img
                      className="w-5 h-5"
                      src={fe_assets.logout_icon}
                      alt="Logout"
                    />
                    <p>Logout</p>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
