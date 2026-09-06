import React from "react";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <div>
      <div className="bottom-0 bg-white/10 backdrop-blur-md w-full fixed h-8 flex justify-center items-center">
        <footer><p className="text-[12px]">©{year} Development By Sulaiman</p></footer>
      </div>
    </div>
  );
};

export default Footer;
