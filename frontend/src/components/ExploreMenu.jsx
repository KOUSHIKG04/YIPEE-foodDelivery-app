import React from "react";
import { menu_list } from "@/assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-28" id="explore-menu">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-full">
          Explore our menu
        </h1>
        <p className="text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining experience
          one delicious meal at a time.
        </p>
        <div className="relative w-full">
          <div className="p-2 sm:p-4 md:p-5 flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 text-center my-4 md:my-5 scrollbar-hide">
            <div className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8">
              {menu_list.map((item, index) => (
                <div
                  onClick={() => {
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    );
                  }}
                  key={index}
                  className={`flex flex-col items-center flex-shrink-0 ${
                    category === item.menu_name ? "text-red-600" : ""
                  }`}
                >
                  <img
                    src={item.menu_image}
                    alt={item.menu_name}
                    className={`w-[25vw] min-w-[70px] sm:w-[20vw] md:w-[15vw] lg:w-[12vw] cursor-pointer rounded-full transition-transform duration-200 hover:scale-105 ${
                      category === item.menu_name
                        ? "border-4 border-red-500 rounded-full"
                        : ""
                    }`}
                  />
                  <p className="p-1 sm:p-2 m-1 sm:m-2 font-medium font-curs text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.menu_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div >
          <p className="mt-2 absolute right-4 flex items-center gap-2 text-gray-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
            SCROLL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6"
              width="20"
              height="20"
            >
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          </p>
          </div>
        </div>
      </div>
      <hr className="my-4 h-0.5 bg-gray-500 border-none" />
    </div>
  );
};

export default ExploreMenu;
