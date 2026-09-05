const Home = () => {
  return (
    <div>
      <div className="flex flex-col pt-20">
        <p className="text-[150px] lg:text-[100px] font-google-sans text-white/50 backdrop-blur-md font-extrabold text-center">
          Cek Prakiraan Cuaca
        </p>
        <p className="text-[50px] font-google-sans font-medium text-center text-white/50 backdrop-blur-md">
          Kelurahan / Desa tempatmu tinggal
        </p>
        <p className="text-[20px] font-google-sans font-medium text-center text-white/50 backdrop-blur-md">
          Dari sekarang hingga 2 hari kedepan
        </p>
      </div>
    </div>
  );
};

export default Home;
