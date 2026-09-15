const InfoWeather = () => {
  return (
    <div className="w-full h-full mt-10 bg-white/20 backdrop-blur-xl py-3 rounded-[10px] outline-2 outline-white">
      <h2 className="font-poppins font-bold my-2 mx-6">Keterangan Cuaca</h2>
      <div className="w-full grid grid-cols-2 mx-6">
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
