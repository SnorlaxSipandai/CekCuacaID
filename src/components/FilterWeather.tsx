import React from "react";
import type { dataCuaca } from "../pages/DisplayWeather";

const FilterWeather = ({ dataHari }: { dataHari: dataCuaca[] }) => {
  return (
    <div className="w-full flex justify-end pt-5">
      <div className="bg-white/5 backdrop-blur-xl p-2 rounded-[10px]">
        <select className="font-poppins">
          <option value="">
            Filter Cuaca..
          </option>
          <option value="">Cerah</option>
          <option value="">Udara Kabur</option>
          <option value="">Mendung</option>
          <option value="">Kabut</option>
          <option value="">Hujan</option>
          <option value="">Badai</option>
        </select>
      </div>
    </div>
  );
};

export default FilterWeather;
