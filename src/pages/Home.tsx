import { useState } from "react";

interface Animation {
  setAnimationNav: (v: boolean) => void;
}

const Home = ({ setAnimationNav }: Animation) => {
  const [mulai, setMulai] = useState(false);

  const ready = () => {
    setMulai(true);
  };

  const readySearch = () => {
    setAnimationNav(true);
  };

  return (
    <div className="relative overflow-hidden h-full w-full">
      <img
        src="/images/Awan.png"
        alt="awan"
        width={2000}
        className="animate-cloude-infinite absolute top-0"
        style={{ animationDuration: "100s" }}
      />

      <div className="flex flex-col relative pt-12 items-center gap-5 w-full px-4 mt-20 max-w-7xl mx-auto">
        {/* CARD PARENT: Gunakan px-6 / px-10 agar simetris */}
        <div
          className={`w-full relative bg-white/10 backdrop-blur-xl flex flex-col lg:w-[1000px] xl:w-[1200px] justify-between transition-all duration-600 ease-in-out py-4 ${
            mulai ? "lg:h-160" : "lg:h-90"
          } ${mulai ? "xl:h-140" : "xl:h-120"} ${
            mulai ? "max-[480px]:h-120" : "max-[480px]:h-60"
          } rounded-[10px] px-6 sm:px-10`}
        >
          <div className="text-center flex flex-col items-start w-full">
            <p className="xl:text-[80px] lg:text-[50px] text-[30px] font-poppins text-[#D6C7FF] font-extrabold text-start">
              Cek Prakiraan Cuaca
            </p>
            <span className="z-10 xl:text-[80px] lg:text-[50px] text-[30px] font-poppins font-extrabold">
              <span className="text-white">Indo</span>
              <span className="text-red-500">nesia</span>
            </span>

            <button
              className={`bg-black text-white h-10 px-6 rounded-2xl transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer font-poppins ${
                mulai ? "hidden" : "visible"
              }`}
              onClick={ready}
            >
              Mulai
            </button>

            {/* ELEMEN ABSOLUTE YANG DIPERBAIKI */}
            <div
              className={`bg-white/20 rounded-[10px] flex flex-col gap-5 absolute 
          inset-x-4 max-[480px]:inset-x-2 sm:w-full sm:max-w-xl
          -z-10 ${mulai ? "top-55 max-[480px]:top-35" : "top-30 max-[480px]:-top-5"} 
          p-5 mt-4 transition-all duration-600 ease-in-out text-black ${
            mulai ? "opacity-100" : "opacity-0"
          }`}
            >
              <p className="text-[15px] font-google-sans font-medium text-justify">
                Kamu bisa cek prakiraan cuaca dari Kelurahan / Desa tempat kamu
                tinggal, sekarang hingga 2 hari kedepan, silahkan input nama
                provinsi, kota / kabupaten, kecamatan, kelurahan / desa tempat
                kamu tinggal
              </p>
              <div className="flex justify-start">
                <button
                  className="bg-red-500 text-white w-40 h-10 rounded-2xl transition-all duration-200 ease-in-out hover:text-black hover:scale-110 cursor-pointer font-poppins"
                  onClick={readySearch}
                >
                  Cek Sekarang!!
                </button>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center transition-all duration-600 ease-in-out text-white ${
              mulai ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-poppins font-bold text-white">Data by</p>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5VpayLRkp-bMZ-LhpM6zilUjMLa06GnC3SuXXshIqDIH7qgiZ5DlqHT8KuJ7fl5vpjICCQnJXBCJDL90983aaCGuSkQl_dKVV6tGdhU4U6cpKXnIwQmhyqMDKga8FBjknge7T7GWZik/s2048/Logo+BMKG.png"
              alt="BMKG"
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
