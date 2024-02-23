import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Congrats() {
  const navigate = useNavigate();
  useEffect(() => {
    const currentTime = new Date().toLocaleString();
    localStorage.setItem("SDE_QUIZ_FINISH_TIME", currentTime);
  }, []);
  return (
    <div className="  ">
      <h1 className=" text-4xl px-6  py-8 font-semibold text-text-color font-Andika grid h-[100vh] place-content-center  ">
        Congrats For Completing the Quiz!!
      </h1>
    </div>
  );
}
