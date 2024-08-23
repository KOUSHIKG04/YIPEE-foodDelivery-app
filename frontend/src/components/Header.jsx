import React from "react";

const Header = () => {
  return (
    <div
      className=" flex items-center justify-center bg-no-repeat bg-contain bg-center relative mx-auto mt-5"
      style={{ backgroundImage: "url('/header_img.png')", height: "34vw" }}
    >
      <div className="animate-fadeIn absolute flex flex-col items-start gap-6 max-w-[46%] bottom-[10%] left-[14vw] text-left">
        <h2 className="text-2xl font-bold text-white text-[max(4.5vw,22px)] leading-tight">
          <div>Order Your</div>
          <div>Favourite Food</div>
        </h2>
        <p className="font-medium text-base leading-relaxed text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of
          dishes crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your carvings and elevate your dining experiene
          one delicious meal at a time.
        </p>
        <button
          type="button"
         className="bg-[#171818] mt-1 text-white py-2 px-5 rounded-2xl hover:bg-slate-100 hover:text-red-600 font-semibold"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
