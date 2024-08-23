import { fe_assets } from "@/assets/frontend_assets/assets";
import React from "react";

const AppDownload = () => {
  return (
    <div className="mt-24 mb-24 text-center font-medium text-[max(2vw,20px)]">
      <div className="flex flex-col items-center" id="a">
        <p>For Better Experience Download.</p>
        <div id="b" className="w-36 font-extrabold text-2xl text-red-500 pt-2">
          YIPEE !
        </div>
      </div>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-5">
        <img
          src={fe_assets.app_store}
          alt="App Store"
          className="w-[max(5vw,50px)] min-w-[120px] transition duration-500 transform hover:scale-110 cursor-pointer"
        />
        <img
          src={fe_assets.play_store}
          alt="Play Store"
          className="w-[max(5vw,50px)] min-w-[120px] transition duration-500 transform hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AppDownload;
