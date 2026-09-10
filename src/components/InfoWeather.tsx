import React from "react";

const InfoWeather = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col mt-10 h-full bg-white/20 backdrop-blur-xl p-3 rounded-[10px] outline-1 outline-white">
        <label className="font-poppins">Keterangan</label>

        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <label className="font-poppins">Cerah</label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <label className="font-poppins">Udara Kabur</label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <label className="font-poppins">Berawan</label>
        </div>
         <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          <label className="font-poppins">Kabut</label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <label className="font-poppins">Hujan</label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <label className="font-poppins">Petir</label>
        </div>
      </div>
    </div>
  );
};

export default InfoWeather;
