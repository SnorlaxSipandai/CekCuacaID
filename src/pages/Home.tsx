const Home = () => {
  return (
    <div>
      <div className="flex flex-col pt-10">
        <p className="text-[150px] lg:text-[95px] font-google-sans text-white font-extrabold text-center">
          Cek Prakiraan Cuaca Indonesia
        </p>

        <p className="text-[20px] font-google-sans font-medium text-center text-white ">
          Kamu bisa cek prakiraan cuaca dari Kelurahan / Desa tempat kamu tinggal, sekarang hingga 2 hari kedepan
        </p>

        <div className="flex items-center justify-center pt-8">
          <p className="font-google-sans font-bold">Data by</p>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5VpayLRkp-bMZ-LhpM6zilUjMLa06GnC3SuXXshIqDIH7qgiZ5DlqHT8KuJ7fl5vpjICCQnJXBCJDL90983aaCGuSkQl_dKVV6tGdhU4U6cpKXnIwQmhyqMDKga8FBjknge7T7GWZik/s2048/Logo+BMKG.png" alt="BMKG" className="w-40"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
