import React from "react";
import psgLogoSvg from "../../assets/psgLogoSvg.svg";
import CSLLogo from "../../assets/csl_logo.png";
import KriyaLogo from "../../assets/kriya_logo.svg";
export default function Nav() {
  return (
    <main className="  px-4 py-7 ">
      <section className=" max-md:hidden flex w-full justify-end gap-10 items-center ">
        <nav className="flex justify-evenly items-center ">
          <img src={KriyaLogo} alt="Logo" className=" h-16" />
        </nav>
        <nav className="h-24 flex items-center space-x-5 ">
          <img src={CSLLogo} alt="Logo" className=" h-16 rounded-md " />
        </nav>
        <nav className="h-24 flex items-center space-x-5 ">
          <div className=" flex space-x-3   justify-center items-center">
            <h1 className="mb-3 font-Andika text-2xl text-[#ffffffbe]  text-center ">
              AMCS
            </h1>
          </div>
        </nav>
        <nav className=" h-14 flex items-center space-x-5  ">
          <img src={psgLogoSvg} alt="Logo" className="h-14  rounded-sm" />
        </nav>
      </section>
    </main>
  );
}
