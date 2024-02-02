import React from 'react'
import psgLogo from "../../assets/psg_logo.png";
import psgLogoSvg from "../../assets/psgLogoSvg.svg";
import kriyaLogo from "../../assets/Kriya_Logo.jpg";
import amcsText from "../../assets/amcsText.svg";
import kriyaText from "../../assets/kriyaText.svg";
import collegeName from "../../assets/collegeNameText.svg";
import bgGirl from "../../assets/bgGirlPic.png";
import xMark from "../../assets/xMark.svg";
export default function Nav() {
  return (
    <>
        <section
      className=" flex w-full justify-end gap-10 "
      >
        <nav
          className="h-24 flex justify-evenly "
        >
          <img src={kriyaText} alt="Logo" className=" h-24 w-48  " />
        </nav>
        <nav
        className="h-24 flex items-center space-x-5 "
        >
          <img src={kriyaLogo} alt="Logo" className=" h-16 rounded-md " />
          <div
          className=" flex space-x-3 "
          >
            <img src={amcsText} alt="Logo" className=" h-6  " />
            <img src={xMark} alt="" />
          </div>
        </nav>
        <nav
        className=" h-24 flex items-center space-x-5  "
        >
          <img src={psgLogoSvg} alt="Logo" className="h-16 rounded-sm" />
          <img src={collegeName} alt="Logo" className=" h-6 w-18" />
        </nav>
      </section>
    </>
  )
}
