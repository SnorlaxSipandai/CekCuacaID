import React from "react";
import { useState, useEffect } from "react";
import Mapping from "../components/Mapping";

const DisplayWeather = ({ wilayah }: { wilayah: string }) => {
  interface dataCuaca {
    weather_desc: string;
    t: string;
    image: string;
    local_datetime: string;
  }

  interface dataLokasi {
    desa: string;
    kotkab: string;
  }

  interface dataCuacaDisplay {
    weather_desc: string;
    t: number;
    image: string;
    hu: number;
    wd: string;
    tcc: number;
    tp: number;
    ws: string;
    vs_text: string;
    utc_datetime: string;
  }

  const [display, setDisplay] = useState<dataLokasi | null>(null);
  const [displayCuaca, setDisplayCuaca] = useState<dataCuacaDisplay | null>(
    null,
  );
  const [data, setData] = useState<dataCuaca[][]>([]);

  useEffect(() => {
    fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${wilayah}`)
      .then((res) => res.json())
      .then((resdata) => {
        const cuacalist = resdata.data[0].cuaca[0].flat(2);

        setData(resdata.data[0].cuaca);
        setDisplayCuaca(cuacalist[0]);
        setDisplay(resdata.lokasi);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }, [wilayah]);

  console.log(data);

  const windDir: Record<string, string> = {
    N: "Utara",
    S: "Selatan",
    E: "Timur",
    W: "Barat",
    NE: "Timur Laut",
    SE: "Tenggara",
    NW: "Barat Laut",
    SW: "Barat Daya",
  };

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <>
        <div className="w-full h-screen bg-[url('https://i.pinimg.com/1200x/67/c9/40/67c9405c9f3036098a5286480b0e67ee.jpg')] bg-cover flex justify-center items-center">
          <p className="text-white text-[50px] lg:text-[25px] font-google-sans max-[480px]:text-[15px]">
            Memuat data cuaca...
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-25">
        <div className="w-full bg-white/10 backdrop-blur-md lg:w-300 h-150 max-[480px]:h-140 flex items-start rounded-2xl justify-center p-20 gap-50 outline-2 outline-white max-[480px]:p-2 max-[480px]:flex-col max-[480px]:gap-10 max-[480px]:items-center">
          <div className="flex flex-col items-center w-full max-[480px]:mx-auto">
            <h1 className="text-start text-white font-poppins text-[60px] lg:text-[35px] font-extrabold max-[480px]:text-[25px]">
              {display?.desa}
            </h1>
            <div className="flex flex-col items-center">
              <img
                src={displayCuaca?.image}
                alt="image"
                className="w-50 lg:w-40 max-[480px]:w-15"
              />

              <div className="flex flex-col items-center w-full gap-2">
                <p className="text-white text-[50px] lg:text-[50px] font-google-sans max-[480px]:text-[20px]">
                  {displayCuaca?.t}°
                </p>
                <div className="flex gap-15 md:gap-50 w-full">
                  <span className="text-white text-[40px] lg:text-[20px] font-google-sans max-[480px]:text-[15px]">
                    {displayCuaca?.hu}%
                  </span>
                  <span className="text-white text-[40px] lg:text-[20px] font-google-sans max-[480px]:text-[15px]">
                    💨
                    {displayCuaca?.wd
                      ? windDir[displayCuaca.wd]
                      : displayCuaca?.wd}
                  </span>
                </div>
                <p className="text-white text-[60px] lg:text-[30px] font-bold font-poppins max-[480px]:text-[20px]">
                  {displayCuaca?.weather_desc}
                </p>
              </div>
            </div>
          </div>
          <Mapping ID={wilayah} />
        </div>

        {data.map((hari, i) => {
          const dateHari = hari[0].local_datetime.slice(0, 11);
          const dateObj = new Date(dateHari);
          const namaHari = dateObj.toLocaleDateString("id-ID", {
            weekday: "long",
          });

          const detailHari = i === 0 ? "Hari ini" : i === 1 ? "Besok" : "Lusa";

          return (
            <React.Fragment key={i}>
              <div className="flex flex-col my-2 rounded-2xl bg-white/20 backdrop-blur-md outline-2 outline-white w-full mt-8 py-5 h-full">
                <p className="font-google-sans font-bold text-start px-10 max-[480px]:px-9">
                  {detailHari} : {namaHari}
                </p>

                <div className="grid grid-cols-3 md:grid-cols-8 max-[480px]:grid-cols-3 gap-x-5 md:gap-x-5 lg:gap-x-1 gap-y-4 md:gap-y-5 pt-5 px-10 py-10 lg:w-300 max-[480px]:mx-auto max-[480px]:gap-x-5 max-[480px]:px-3">
                  {hari.map((jam, i) => {
                    const dateJam = jam?.local_datetime.slice(0, 11);
                    const time = jam?.local_datetime.slice(11, 16);

                    return (
                      <div
                        key={i}
                        className={`flex flex-col relative items-center justify-center rounded-[10px] bg-white/15 backdrop-blur-md shadow-black shadow-lg md:shadow-2xl w-29 max-[480px]:w-22 max-[480px]:h-30 md:w-40 lg:w-30 h-39 md:h-45 lg:h-38 pt-2`}
                      >
                        {jam.weather_desc.includes("Hujan") && (
                          <div className="absolute top-2 right-3">
                            <span className="w-3 h-3 relative flex">
                              <span className="absolute bg-red-600 animate-ping rounded-full h-full w-full"></span>
                              <span className="relative bg-red-500 w-3 h-3 inline-flex rounded-full"></span>
                            </span>
                          </div>
                        )}

                        {jam.weather_desc.includes("Cerah") && (
                          <div className="absolute top-2 right-3">
                            <span className="w-3 h-3 relative flex">
                              <span className="absolute bg-green-600 animate-ping rounded-full h-full w-full"></span>
                              <span className="relative bg-green-500 w-3 h-3 inline-flex rounded-full"></span>
                            </span>
                          </div>
                        )}

                        {jam.weather_desc.includes("Cerah") && (
                          <div className="absolute top-2 right-3">
                            <span className="w-3 h-3 relative flex">
                              <span className="absolute bg-green-600 animate-ping rounded-full h-full w-full"></span>
                              <span className="relative bg-green-500 w-3 h-3 inline-flex rounded-full"></span>
                            </span>
                          </div>
                        )}

                        {jam.weather_desc == "Berawan" && (
                          <div className="absolute top-2 right-3">
                            <span className="w-3 h-3 relative flex">
                              <span className="absolute bg-yellow-600 animate-ping rounded-full h-full w-full"></span>
                              <span className="relative bg-yellow-500 w-3 h-3 inline-flex rounded-full"></span>
                            </span>
                          </div>
                        )}

                         {jam.weather_desc == "Udara Kabur" && (
                          <div className="absolute top-2 right-3">
                            <span className="w-3 h-3 relative flex">
                              <span className="absolute bg-yellow-600 animate-ping rounded-full h-full w-full"></span>
                              <span className="relative bg-yellow-500 w-3 h-3 inline-flex rounded-full"></span>
                            </span>
                          </div>
                        )}

                        <p className="text-[18px] lg:text-[15px] max-[480px]:text-[12px] text-black font-google-sans">
                          {time}
                        </p>
                        <img
                          src={jam.image}
                          alt="image"
                          className="lg:w-15 max-[480px]:w-8"
                        />
                        <p className="text-[15px] lg:text-[12px] max-[480px]:text-[10px] text-black font-bold font-google-sans">
                          {jam.weather_desc}
                        </p>
                        <p className="text-[13px] lg:text-[12px] max-[480px]:text-[10px] text-black font-google-sans">
                          {dateJam}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayWeather;
