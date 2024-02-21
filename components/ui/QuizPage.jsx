import React, { useState } from "react";
import bgGirl from "../../assets/bgGirlPic.png";
import Nav from "../shared/Nav";
import TickMark from "../../assets/TickMark.svg";
import Congrats from "../shared/Congrats";
import CustomAlert from "../shared/CustomAlert";
import { useNavigate } from "react-router-dom";
import quizData from "../../src/constants/questions.json";
import { checkAnswer } from "../../src/utils/common";
export default function QuizPage({ index }) {
  const navigate = useNavigate();
  const [hintsIndex, setHintsIndex] = useState(-1);
  const [showHint, setShowHint] = useState(false);
  const [answer, setanswer] = useState("");
  const handleAnswerSubmissison = () => {
    if (checkAnswer(answer, index)) {
      setanswer("");
      setShowHint(false);
      navigate(quizData[index].navigateTo);
    } else {
      navigate("/its-a-noun");
    }
  };

  return (
    <div
    >
    <div className=" ">
      <Nav />
      <div className="flex justify-center w-4/6 mx-auto  ">
        <div
        className=" absolute m-10  "
        >
        <img src={bgGirl} alt="bg-image" className="flex justify-center opacity-15 " />  
        </div>
        <div
        className=" absolute  "
        >
        <div className=" w-5/6 mx-auto">
          <h1 className="text-5xl font-bold">{quizData[index].question}</h1>
          <div className=" flex items-center  justify-center space-x-10 mt-10 ">
            <input
              value={answer}
              type="text"
              placeholder="Enter Your Response"
              className=" bg-inherit px-6 py-3 font-Montserrat ring-2 rounded-sm "
              onChange={(e) => {
                setanswer(e.target.value);
              }}
              onKeyUpCapture={(e) => {
                if (e.key === "Enter") {
                  handleAnswerSubmissison();
                }
              }}
            />
            <button onClick={handleAnswerSubmissison}
            className=" "
            >
              <img src={TickMark} alt="" className=" h-14  " />
            </button>
          </div>
          </div>
          {hintsIndex < quizData[index].hints?.length - 1 && (
            <div
              onClick={() => {
                setHintsIndex(
                  (prevIndex) =>
                    (prevIndex + 1) % quizData[index]?.hints?.length
                );
                setShowHint(true);
              }}
              className=" bg-background-color bg-transparent "
            >
              <h1 className=" font-bold text-4xl  p-4 text-center cursor-pointer">
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Show Hints
                </span>
              </h1>
            </div>
          )}
          {showHint && (
            <div
            className={` ${showHint ? "" :"hidden"} bg-background-color  `}
            >
              {quizData[index].hints
                ?.slice(0, hintsIndex + 1)
                .map((hint, index) => {
                  return (
                    <div key={index}>
                      <h1 className=" text-3xl font-Montserrat text-center p-5 ">
                        {hint}
                      </h1>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
