import React, { useState } from "react";
import { menu_list } from "@/assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-28">
      <div className="flex flex-col items-center gap-6 max-w-[80%]">
        <h1 className="font-medium text-4xl text-center w-full">
          Explore our menu
        </h1>
        <p className=" text-center max-w-[70%] text-gray-600">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your carvings and elevate your dining experiene
          one delicious meal at a time.
        </p>
        <div className="p-5 flex overflow-x-auto gap-8 text-center my-5 scrollbar-hide">
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
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-transform duration-200 hover:scale-105 ${
                  category === item.menu_name
                    ? "border-4 border-red-500 rounded-full"
                    : ""
                }`}
              />
              <p className="p-2 m-2 font-medium font-curs">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-2 h-0.5 bg-gray-500 border-none" />
    </div>
  );
};

export default ExploreMenu;
