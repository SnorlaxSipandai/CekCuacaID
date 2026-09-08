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
      {/* NAVBAR CONTAINER: Harus relative + w-full sebagai acuan absolute child-nya */}
      <nav className="fixed top-0 w-full h-15 bg-white/10 backdrop-blur-xl flex items-center justify-between z-10 px-4 max-[480px]:relative max-[480px]:h-12 max-[480px]:py-4">
        {/* 1. JUDUL: Diposisikan ABSOLUTE tepat di tengah Navbar Container */}
        <h1 className="xl:text-[30px] lg:text-[30px] text-[20px] font-google-sans font-extrabold text-white max-[480px]:absolute max-[480px]:top-3 max-[480px]:left-1/2 max-[480px]:-translate-x-1/2 max-[480px]:whitespace-nowrap">
          <span className="text-red-500">Cek</span>Cuaca
          <sup className="xl:text-[15px] lg:text-[15px] text-[12px] font-normal ml-0.5">
            id
          </sup>
        </h1>

        {/* 2. MENU SELECT: Diposisikan ABSOLUTE dengan inset-x-4 (mengikuti lebar Navbar) */}
        <div
          className={`relative md:pr-10 flex gap-2 sm:gap-4 transition-all duration-600 ease-in-out ${
            setAnim ? "" : "mb-50"
          } max-[480px]:absolute max-[480px]:inset-x-4 max-[480px]:grid max-[480px]:grid-cols-2 ${
            setAnim
              ? "max-[480px]:top-14 max-[480px]:opacity-100 max-[480px]:visible"
              : "max-[480px]:-top-32 max-[480px]:opacity-0 max-[480px]:invisible"
          }`}
        >
          {/* Provinsi */}
          <div className="flex flex-col w-full">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold text-black text-[10px] py-0.5">
              Provinsi
            </label>
            <select
              className="w-full lg:w-60 h-8 text-start text-[11px] lg:text-[13px] text-black bg-white/10 rounded-[5px] px-1 font-poppins focus:outline-none"
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

          {/* Kota/Kab */}
          <div className="flex flex-col w-full">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold text-black text-[10px] py-0.5">
              Kota / Kab
            </label>
            <select
              className="w-full lg:w-60 h-8 text-start text-[11px] lg:text-[13px] text-black bg-white/10 rounded-[5px] px-1 font-poppins focus:outline-none"
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

          {/* Kecamatan */}
          <div className="flex flex-col w-full">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold text-black text-[10px] py-0.5">
              Kecamatan
            </label>
            <select
              className="w-full lg:w-60 h-8 text-start text-[11px] lg:text-[13px] text-black bg-white/10 rounded-[5px] px-1 font-poppins focus:outline-none"
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

          {/* Kel/Desa */}
          <div className="flex flex-col w-full">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold text-black text-[10px] py-0.5">
              Kelurahan
            </label>
            <select
              className="w-full lg:w-60 h-8 text-start text-[11px] lg:text-[13px] text-black bg-white/10 rounded-[5px] px-1 font-poppins focus:outline-none"
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
