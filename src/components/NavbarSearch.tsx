import { useEffect } from "react";
import { useState } from "react";

interface searchProps {
  inputSearch: (v: string) => void;
}

const NavbarSearch = ({ inputSearch }: searchProps) => {
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
      <nav className="fixed top-0 w-full h-15 bg-white/10 backdrop-blur-md flex items-center justify-between z-10">
        <h1 className="text-[30px] lg:text-[20px] font-google-sans pl-10 font-extrabold text-white">
          <span className="text-red-500">Cek</span>Cuaca{" "}
          <sup className="text-[15px] lg:text-[10px] font-normal">id</sup>
        </h1>

        <div className="pr-10 flex gap-10 lg:gap-2">
          {/* provinsi */}
          <div className="flex flex-col">
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold">Provinsi</label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins "
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
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold">Kota / Kabupaten</label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px]"
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
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold">Kecamatan</label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px]"
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
            <label className="text-center bg-white/15 backdrop-blur-md lg:text-[12px] rounded-[5px] font-google-sans font-bold">Kelurahan</label>
            <select
              className="w-60 h-8  text-start text-[13px] text-white font-poppins rounded-r-[5px]"
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
