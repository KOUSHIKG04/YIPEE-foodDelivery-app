import React from "react";

const Header = () => {
  return (
    <div
      id="home"
      className=" flex items-center justify-center bg-no-repeat bg-contain bg-center relative mx-auto mt-5"
      style={{ backgroundImage: "url('/header_img.png')", height: "34vw" }}
    >
      <div className=" animate-fadeIn absolute flex flex-col items-start gap-6 min-w-[65%]  max-w-[65%] bottom-[10%] left-[14vw] text-left ">
        <h2 className="text-2xl font-bold text-white text-[max(4.5vw,22px)] leading-tight md:max-w-[80%] sm:text-[max(4.5vw,22px)] custom-hide:text-start">
          <p>Order Your</p>
          <div>
            Favourite Food
            <span className="hidden custom-hide:inline-block  text-1.5xl ml-2  ">
              Here
            </span>
          </div>
        </h2>
        <p className="font-medium text-base leading-relaxed text-white text-[1vw] hidden md:block custom-hide:hidden ">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience
          one delicious meal at a time.
        </p>
        <a
          href="#explore-menu"
          type="button"
          className="bg-[#171818] mt-1 text-white py-2 px-5 rounded-2xl hover:bg-slate-100 hover:text-red-600 font-semibold md:px-4 md:py-2 sm:px-3 sm:py-1"
        >
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Header;
