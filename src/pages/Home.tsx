const Home = () => {
  return (
    <div className="relative overflow-hidden h-full">
      <img src="/images/Awan.png" alt="awan" width={2000} className="animate-cloude-infinite absolute top-0" style={{ animationDuration: '100s' }} />
      <div className="flex flex-col pt-20">

        {/* <img src="https://png.pngtree.com/png-vector/20250126/ourmid/pngtree-soft-whites-clouds-on-transparent-background-png-image_15341810.png" alt="awan" className="animate-cloude-infinite absolute w-200 top-80" style={{ animationDuration: '30s'}}/> */}
        <p className="text-[150px] lg:text-[95px] font-poppins text-white font-extrabold text-center">
          Cek Prakiraan Cuaca
        </p>
        <span className="z-10 text-[150px] lg:text-[95px] font-poppins font-extrabold text-center"><span className="text-white">Indo</span><span className="text-red-500">nesia</span></span>

        <p className="text-[20px] font-google-sans font-medium text-center text-white">
          Kamu bisa cek prakiraan cuaca dari Kelurahan / Desa tempat kamu tinggal, sekarang hingga 2 hari kedepan
        </p>

        <div className="flex items-center justify-center pt-8">
          <p className="font-poppins font-bold text-white">Data by</p>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5VpayLRkp-bMZ-LhpM6zilUjMLa06GnC3SuXXshIqDIH7qgiZ5DlqHT8KuJ7fl5vpjICCQnJXBCJDL90983aaCGuSkQl_dKVV6tGdhU4U6cpKXnIwQmhyqMDKga8FBjknge7T7GWZik/s2048/Logo+BMKG.png" alt="BMKG" className="w-30" />
        </div>
      </div>
    </div>
  );
};

export default Home;
