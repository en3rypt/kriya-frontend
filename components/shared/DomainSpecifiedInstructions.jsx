import React, { useEffect, useState } from "react";
import {
  webDInstructions,
  cyberSecurityInstructions,
  dataScienceInstructions,
} from "../../src/constants/domainBasedInstructions";
import { useNavigate } from "react-router-dom";

export default function DomainSpecifiedInstructions({ domain }) {
  const [instructions, setinstructions] = useState([]);
  const [urlToNavigateTo, seturlToNavigateTo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (domain === "webD") {
      setinstructions(webDInstructions);
      seturlToNavigateTo("/softwareDevQuiz");
    } else if (domain === "cyber") {
      setinstructions(cyberSecurityInstructions);
      seturlToNavigateTo("/cyberSecurity");
    } else if (domain === "dataScience") {
      setinstructions(dataScienceInstructions);
      seturlToNavigateTo("/dsQuiz");
    }
  }, []);
  return (
    <div className=" flex leading-10  items-start mt-10 font-semibold font-Montserrat  w-5/6 mx-auto justify-center flex-col  ">
      <h1 className="mx-auto font-Andika text-center bg-gradient-to-tr from-pink-500 to-text-color  bg-clip-text text-transparent text-3xl p-10 font-bold ">
        QUIZ INSTRUCTIONS
      </h1>
      {instructions.map((instruction, index) => {
        return (
          <ol className=" flex items-start " key={index}>
            {index + 1}) <li className=" ">{instruction}</li>
          </ol>
        );
      })}
      <div className=" p-10  w-full flex items-end mr-0 ">
        <button
          onClick={() => {
            navigate(urlToNavigateTo);
          }}
          className=" flex items-end text-4xl font-semibold px-4 w-full justify-end bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text "
        >
          Start Your Quiz
        </button>
      </div>
    </div>
  );
}
