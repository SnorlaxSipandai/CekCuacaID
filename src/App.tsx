import { useState } from "react";
import DisplayWeather from "./pages/DisplayWeather";
import NavbarSearch from "./components/NavbarSearch";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  const [wilayah, setWilayah] = useState("");

  // 1273061005
  // 12.72.07.1005
  const handleInputSearch = (v: string) => {
    setWilayah(v);
  };

  if (!wilayah) {
    return (
      <div>
        <div className=" w-full h-screen bg-[url('https://i.pinimg.com/1200x/67/c9/40/67c9405c9f3036098a5286480b0e67ee.jpg')] bg-cover">
          {/* SearchLocation */}
          <NavbarSearch inputSearch={handleInputSearch} />
          <Home />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" w-full h-full bg-[url('https://i.pinimg.com/1200x/67/c9/40/67c9405c9f3036098a5286480b0e67ee.jpg')] bg-cover ">
        <NavbarSearch inputSearch={handleInputSearch} />
        <div className="flex flex-col items-center pt-10 pb-15">
          <DisplayWeather wilayah={wilayah} />
        </div>
      </div>
    </div>
  );
};

export default App;
