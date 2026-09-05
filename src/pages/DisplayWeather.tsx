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
          <p className="text-white text-[50px] font-google-sans">
            Memuat data cuaca...
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-10">
        <div className="bg-white/10 backdrop-blur-md w-450 flex items-start rounded-2xl justify-center p-20 gap-50 outline-2 outline-white ">
          <div className="flex flex-col items-center w-150">
            <h1 className="text-white font-poppins text-[60px] font-extrabold">
              {display?.desa}
            </h1>
            <div className="flex flex-col items-center">
              <img src={displayCuaca?.image} alt="image" width={200} />

              <div className="flex flex-col items-center">
                <p className="text-white text-[50px] font-google-sans">
                  {displayCuaca?.t}°
                </p>
                <div className="flex gap-20 md:gap-50">
                  <span className="text-white text-[40px] font-google-sans">
                    {displayCuaca?.hu}%
                  </span>
                  <span className="text-white text-[40px] font-google-sans">
                    {displayCuaca?.wd
                      ? windDir[displayCuaca.wd]
                      : displayCuaca?.wd}
                  </span>
                </div>
                <p className="text-white text-[60px] font-bold font-poppins">
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
              <div className="flex flex-col pt-15 my-5 rounded-2xl bg-white/20 backdrop-blur-md outline-2 outline-white">
                <p className="font-google-sans font-bold text-start px-10">
                  {detailHari} : {namaHari}
                </p>

                <div className="grid grid-cols-3 md:grid-cols-8 gap-x-5 md:gap-x-5 gap-y-4 md:gap-y-5 pt-5 px-10 py-10 w-450">
                  {hari.map((jam, i) => {
                    const dateJam = jam?.local_datetime.slice(0, 11);
                    const time = jam?.local_datetime.slice(11, 16);
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md shadow-black shadow-lg md:shadow-2xl w-29 md:w-40 h-39 md:h-45 pt-2 "
                      >
                        <p className="text-[18px] text-black font-google-sans">
                          {time}
                        </p>
                        <img src={jam.image} alt="image" width={65} />
                        <p className="text-[15px] text-black font-bold font-google-sans">
                          {jam.weather_desc}
                        </p>
                        <p className="text-[13px] text-black font-google-sans">
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
