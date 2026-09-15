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

      <div className="flex flex-col h-145 relative pt-32 items-center gap-5 w-full px-4 mt-20 max-w-7xl mx-auto">
        {/* CARD PARENT: Gunakan px-6 / px-10 agar simetris */}
        <div
          className={`w-full relative bg-white/10 backdrop-blur-xl flex flex-col lg:w-[1000px] xl:w-[1200px] justify-between transition-all duration-600 ease-in-out py-4 ${
            mulai ? "lg:h-160" : "lg:h-90"
          } ${mulai ? "xl:h-140" : "xl:h-120"} ${
            mulai ? "max-[480px]:h-120" : "max-[480px]:h-60"
          } rounded-[10px] px-6 sm:px-10`}
        >
          <div className="text-center flex flex-col items-start w-full ">
            <p className="xl:text-[80px] lg:text-[50px] text-[25px] font-poppins text-black font-bold text-start">
              Selamat Datang di Cek Prakiraan Cuaca di wilayah <span className="text-red-500">INDO</span>
              <span className="text-white">NESIA</span>
            </p>

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
          inset-x-5 max-[480px]:inset-x-6 sm:w-full sm:max-w-xl
          -z-10 ${mulai ? "top-55 max-[480px]:top-35" : "top-30 max-[480px]:-top-5"} 
          p-5 mt-4 transition-all duration-600 ease-in-out text-black ${
            mulai ? "opacity-100" : "opacity-0"
          }`}
            >
              <p className="text-[15px] font-google-sans font-medium text-justify px-1">
                Kamu bisa cek prakiraan cuaca dari Kelurahan / Desa tempat kamu
                tinggal, sekarang hingga 2 hari kedepan, silahkan input nama
                provinsi, kota / kabupaten, kecamatan, kelurahan / desa tempat
                kamu tinggal.
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-red-500 text-white w-30 h-10 rounded-2xl text-[12px] transition-all duration-200 ease-in-out hover:text-black hover:scale-110 cursor-pointer font-poppins"
                  onClick={readySearch}
                >
                  Cek Sekarang!!
                </button>
                <div
                  className={`flex items-center justify-center transition-all duration-600 ease-in-out text-white ${
                    mulai ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="font-poppins font-bold text-white text-[10px]">
                    Data by
                  </p>
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5VpayLRkp-bMZ-LhpM6zilUjMLa06GnC3SuXXshIqDIH7qgiZ5DlqHT8KuJ7fl5vpjICCQnJXBCJDL90983aaCGuSkQl_dKVV6tGdhU4U6cpKXnIwQmhyqMDKga8FBjknge7T7GWZik/s2048/Logo+BMKG.png"
                    alt="BMKG"
                    className="w-15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
