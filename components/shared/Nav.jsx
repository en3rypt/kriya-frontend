import React from "react";
import psgLogo from "../../assets/psg_logo.png";
import psgLogoSvg from "../../assets/psgLogoSvg.svg";
import kriyaLogo from "../../assets/Kriya_Logo.jpg";
import amcsText from "../../assets/amcsText.svg";
import kriyaText from "../../assets/kriyaText.svg";
import collegeName from "../../assets/collegeNameText.svg";
import xMark from "../../assets/xMark.svg";
import CSLLogo from "../../assets/csl_logo.png";
export default function Nav() {
  return (
    <main className=" px-4 py-7 ">
      <section className=" flex w-full justify-end gap-10 ">
        <nav className="h-24 flex justify-evenly ">
          <img src={kriyaText} alt="Logo" className=" h-24 w-48  " />
        </nav>
        <nav className="h-24 flex items-center space-x-5 ">
          <img src={CSLLogo} alt="Logo" className=" h-16 rounded-md " />
          <div className=" flex space-x-3 ">
            <img src={amcsText} alt="Logo" className=" h-6  " />
          </div>
        </nav>
        <nav className=" h-24 flex items-center space-x-5  ">
          <img src={psgLogoSvg} alt="Logo" className="h-16 rounded-sm" />
          <h1
          className=" text-lg font-Andika "
          >
            PSG COLLEGE OF TECHNOLOGY
          </h1>
        </nav>
      </section>
    </main>
  );
}
