import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function ItsANoun() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const qnIndex = Number(params.get("index"));
  return (
    <div className=" min-h-screen grid place-content-center ">
      <p className="">
        <span className="inline bg-gradient-to-r from-gradient1 to-gradient2 text-3xl font-Montserrat text-transparent bg-clip-text font-semibold ">
          It's Not A Noun, try a Noun
        </span>
        <span className="inline text-2xl">😉</span>
      </p>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" font-Montserrat text-3xl px-4 py-6 text-text-color "
      >
        Try again
      </button>
    </div>
  );
}
