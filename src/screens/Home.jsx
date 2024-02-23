import React from "react";
import bgGirl from "../../assets/bgGirlPic.png";
import Nav from "../../components/shared/Nav";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" px-5 py-3 w-full ">
      <Nav />
      <article className=" h-[10vmax] flex flex-end  items-end  ">
        <h1 className="font-semibold text-6xl text-white w-full ml-[2.5%] mb-10">
          {" < "}{" "}
          <span className=" text-text-color w-full  ">Top Decoders</span>{" "}
          {" / >"}
        </h1>
      </article>
      <section className=" flex items-center justify-between m-24 h-[24vmin]  w-full mx-[32px] ">
        <ul className=" flex flex-col items-center justify-center gap-y-5 ">
          <Link
            to={`/instructions?domain=webD`}
            className="  w-full text-center text-white px-8 py-4 text-lg border font-semibold border-text-color rounded-xl "
          >
            Software development
          </Link>
          <Link
            to={`/instructions?domain=dataScience`}
            className=" w-full text-center text-white px-8 py-4 text-lg border font-semibold border-text-color rounded-xl "
          >
            Data Science
          </Link>
          <Link
            to="/instructions?domain=cyber"
            className=" text-center w-full text-white px-8 py-4 text-lg border font-semibold border-text-color rounded-xl "
          >
            CyberSecurity
          </Link>
          <Link
            to="/general-instructions"
            className="underline text-xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
          >
            General Instructions
          </Link>
        </ul>
        <div className="bg-[#142035]">
          <img src={bgGirl} alt="" className="" />
        </div>
      </section>
    </div>
  );
}
