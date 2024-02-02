import React from "react";
import bgGirl from "../../assets/bgGirlPic.png";
import Nav from "../../components/shared/Nav";
export default function Home() {
  return (
    <div
    className=" px-5 py-3 "
    >
      <Nav/>
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
