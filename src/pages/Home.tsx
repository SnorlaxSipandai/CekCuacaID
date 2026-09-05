const Home = () => {
  return (
    <div>
      <div className="flex flex-col pt-20">
        <p className="text-[150px] font-poppins text-white/40 backdrop-blur-md font-extrabold text-center">
          Cek Prakiraan Cuaca
        </p>
        <p className="text-[50px] font-poppins text-white font-medium text-center">
          Kelurahan / Desa tempatmu tinggal
        </p>
        <p className="text-[20px] font-poppins text-white font-medium text-center ">
          Dari sekarang hingga 2 hari kedepan
        </p>
      </div>
    </div>
  );
};

export default Home;
