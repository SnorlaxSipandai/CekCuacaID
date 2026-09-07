import { useEffect } from "react";
import { useState } from "react";

interface searchProps {
  inputSearch: (v: string) => void;
  setAnim: boolean;
}

const NavbarSearch = ({ inputSearch, setAnim }: searchProps) => {
  interface dataWilayah {
    nama_wilayah: string;
    kode_wilayah: string;
  }

  const [inputProvinsiData, setInputProvinsiData] = useState<dataWilayah[]>([]);
  const [inputKotaKabData, setInputKotaKabData] = useState<dataWilayah[]>([]);
  const [inputKecamatanData, setInputKecamatanData] = useState<dataWilayah[]>(
    [],
  );
  const [inputKelDesaData, setInputKelDesaData] = useState<dataWilayah[]>([]);

  const [inputProvinsi, setInputProvinsi] = useState("");
  const [inputKotaKab, setInputKotaKab] = useState("");
  const [inputKecamatan, setInputKecamatan] = useState("");
  const [inputKelDesa, setInputKelDesa] = useState("");

  useEffect(() => {
    fetch("https://api.datawilayah.com/api/provinsi.json")
      .then((res) => res.json())
      .then((data) => {
        setInputProvinsiData(data.data);
        setInputKotaKabData([]);
        setInputKecamatanData([]);
        setInputKelDesaData([]);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (!inputProvinsi) return;
    fetch(
      `https://api.datawilayah.com/api/kabupaten_kota/${inputProvinsi}.json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setInputKotaKabData(data.data);
        setInputKecamatanData([]);
        setInputKelDesaData([]);
      });
  }, [inputProvinsi]);

  useEffect(() => {
    if (!inputKotaKab) return;
    fetch(`https://api.datawilayah.com/api/kecamatan/${inputKotaKab}.json`)
      .then((res) => res.json())
      .then((data) => {
        setInputKecamatanData(data.data);
        setInputKelDesaData([]);
      });
  }, [inputKotaKab]);

  useEffect(() => {
    if (!inputKecamatan) return;
    fetch(
      `https://api.datawilayah.com/api/desa_kelurahan/${inputKecamatan}.json`,
    )
      .then((res) => res.json())
      .then((data) => setInputKelDesaData(data.data));
  }, [inputKecamatan]);

  return (
    <div>
      <nav className="fixed top-0 w-full h-15 bg-white/10 backdrop-blur-xl flex items-center justify-between z-10 gap-5 max-[480px]:relative">
        <h1 className="xl:text-[30px] lg:text-[30px] max-[450px]:text-[20px] font-google-sans font-extrabol text-white max-[480px]:absolute max-[480px]:left-40">
          <span className="text-red-500">Cek</span>Cuaca
          <sup className="xl:text-[15px] lg:text-[15px] max-[480px]:text-[12px] font-normal">
            id
          </sup>
        </h1>

        <div
          className={`pr-10 flex gap-10 lg:gap-2 transition-all duration-600 ease-in-out ${setAnim ? "" : "mb-50"}  max-[480px]:gap-2  max-[480px]:pt-5 max-[480px]:absolute ${setAnim ? "max-[480px]:top-15" :"max-[480px]:-top-20"} max-[480px]:left-6`}
        >
          {/* provinsi */}
          <div className="flex flex-col">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold max-[480px]:text-[10px] ">
              Provinsi
            </label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins max-[480px]:w-20 "
              value={inputProvinsi}
              onChange={(e) => {
                setInputProvinsi(e.target.value);
                setInputKotaKab("");
                setInputKecamatan("");
                setInputKelDesa("");
              }}
            >
              <option value="" disabled hidden>
                ---
              </option>
              {inputProvinsiData.map((p) => (
                <option
                  key={p.kode_wilayah}
                  value={p.kode_wilayah}
                  className="text-black"
                >
                  {p.nama_wilayah}
                </option>
              ))}
            </select>
          </div>

          {/* kota/kab */}
          <div className="flex flex-col">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold max-[480px]:text-[10px]">
              Kota / Kab
            </label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px] max-[480px]:w-20 "
              value={inputKotaKab}
              onChange={(e) => {
                setInputKotaKab(e.target.value);
                setInputKecamatan("");
                setInputKelDesa("");
              }}
            >
              <option value="" disabled hidden>
                ---
              </option>
              {inputKotaKabData.map((p) => (
                <option
                  key={p.kode_wilayah}
                  value={p.kode_wilayah}
                  className="text-black"
                >
                  {p.nama_wilayah}
                </option>
              ))}
            </select>
          </div>
          {/* kecamatan */}
          <div className="flex flex-col">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold max-[480px]:text-[10px]">
              Kecamatan
            </label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px] max-[480px]:w-20"
              value={inputKecamatan}
              onChange={(e) => {
                setInputKecamatan(e.target.value);
                setInputKelDesa("");
              }}
            >
              <option value="" disabled hidden>
                ---
              </option>
              {inputKecamatanData.map((p) => (
                <option
                  key={p.kode_wilayah}
                  value={p.kode_wilayah}
                  className="text-black"
                >
                  {p.nama_wilayah.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/*kel/desa */}
          <div className="flex flex-col">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold max-[480px]:text-[10px]">
              Kelurahan
            </label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px] max-[480px]:w-20"
              value={inputKelDesa}
              onChange={(e) => {
                inputSearch(e.target.value);
                setInputKelDesa(e.target.value);
              }}
            >
              <option value="" disabled hidden>
                ---
              </option>
              {inputKelDesaData.map((p) => (
                <option
                  key={p.kode_wilayah}
                  value={p.kode_wilayah}
                  className="text-black"
                >
                  {p.nama_wilayah.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSearch;
