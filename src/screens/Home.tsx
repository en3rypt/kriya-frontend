import React from "react";
import psgLogo from "../../assets/psg_logo.png";
import psgLogoSvg from "../../assets/psgLogoSvg.svg";
import kriyaLogo from "../../assets/Kriya_Logo.jpg";
import amcsText from "../../assets/amcsText.svg";
import kriyaText from "../../assets/kriyaText.svg";
import collegeName from "../../assets/collegeNameText.svg";
import bgGirl from "../../assets/bgGirlPic.png";
export default function Home() {
  return (
    <div
    className=" px-5 py-3 "
    >
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
          <img src={amcsText} alt="Logo" className=" h-6  " />
        </nav>
        <nav
        className=" h-24 flex items-center space-x-5  "
        >
          <img src={psgLogoSvg} alt="Logo" className="h-16 rounded-sm" />
          <img src={collegeName} alt="Logo" className=" h-6 w-18" />
        </nav>
      </section>
      <article
      className=" h-[10vmax] flex flex-end  items-end   "
      >
        <h1
        className="font-bold text-6xl text-white "
        >
          {" < "} <span className=" text-text-color  ">Top Decoders</span> {" / >"}
        </h1>
      </article>
      <section
      className=" flex items-center justify-between m-24 h-[24vmin]  "
      >
        <ul
        className=" flex flex-col items-center justify-center gap-y-4 "
        >
          <li
          className="  w-full text-center text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Software development
          </li>
          <li
            className=" w-full text-center text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Data Science
          </li>
          <li
          className=" text-center w-full text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Cyber Security
          </li>
        </ul>
        <div
        className=""
        style={{backgroundColor:"#142035"}}
        >
          <img src={bgGirl} alt="" className="" />
        </div>
      </section>
    </div>
  )
}
