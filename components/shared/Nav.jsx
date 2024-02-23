import React from "react";
import psgLogoSvg from "../../assets/psgLogoSvg.svg";
import CSLLogo from "../../assets/csl_logo.png";
import KriyaLogo from "../../assets/KriyaLogo.png";
export default function Nav() {
  return (
    <main className="  px-4 py-7 ">
      <section className=" max-md:hidden flex w-full justify-end gap-10 items-center ">
        <nav className="h-24 flex justify-evenly items-center ">
          <img src={KriyaLogo} alt="Logo" className=" h-24 w-48 bg-[#ffffffbe] rounded-md " />
        </nav>
        <nav className="h-24 flex items-center space-x-5 ">
          <img src={CSLLogo} alt="Logo" className=" h-16 rounded-md " />
          <div className=" flex space-x-3   ">
            <h1
            className=" w-12 h-24 font-Andika text-2xl text-[#ffffffbe]  text-center mt-[50px] "
            >
              AMCS
            </h1>
          </div>
        </nav>
        <nav className=" h-24 flex items-center space-x-5  ">
          <img src={psgLogoSvg} alt="Logo" className="h-16 rounded-sm" />
        </nav>
      </section>
    </main>
  );
}
