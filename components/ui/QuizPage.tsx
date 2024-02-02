import React, { useState } from 'react';
import data from "../../constants/questions.json";
import { Quiz } from '../../types';
import bgGirl from "../../assets/bgGirlPic.png";
import Nav from '../shared/Nav';
import TickMark from "../../assets/TickMark.svg";
import Congrats from '../shared/Congrats';
import CustomAlert from '../shared/CustomAlert';
import { useNavigate } from 'react-router-dom';
export default function QuizPage({ index,setquizIndexQnNumber }) {
  const quizData: Quiz[] = data;
  const navigate = useNavigate();
  const [hintsIndex, setHintsIndex] = useState<number>(-1);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [answer, setanswer] = useState("");  
  const handleAnswerSubmissison = ()=>{
    // if(quizData[index].answer?.includes(answer)){
    //   setquizIndexQnNumber(index+1);
    // }
    // else{
    //  CustomAlert();
    // }
    if(answer.includes("ing")){
      navigate("/itsNoun")
    }
    setquizIndexQnNumber(index+1);

  }
  if(index >= quizData.length){
    return(
      <Congrats/>
    )
  }
  return (
    <div className='relative min-h-screen'>
      <Nav />
      <div className='flex justify-center h-[39vmax]'>
        <img src={bgGirl} alt="" className='flex justify-center opacity-30' />
        <div className='absolute mx-auto w-11/12 mt-5'>
          <h1 className='text-5xl font-bold'>{quizData[index].question}</h1>
          <div
          className=' flex items-center  justify-center space-x-10 mt-10 '
          >
            <input type="text" placeholder='Enter Your Response' className=' bg-inherit px-6 py-3 font-Montserrat ring-2 rounded-sm ' 
              onChange={(e)=>{
                setanswer(e.target.value);
              }}
              onKeyUpCapture={(e)=>{
                if(e.key === "Enter"){
                  handleAnswerSubmissison();
                }
              }}
            />
            <button
            onClick={handleAnswerSubmissison}
            >
              <img src={TickMark} alt="" className=' h-14  ' />
            </button>
          </div>
          {hintsIndex < quizData[index].hints?.length-1  && (
            <div
            onClick={() => {
              setHintsIndex((prevIndex) => (prevIndex + 1) % quizData[index]?.hints?.length );
              setShowHint(true);              
            }}
          >
            <h1
            className=' font-bold text-4xl  p-4 text-center cursor-pointer'
            >
              <span 
              className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Show Hints
              </span>
            </h1>
          </div>
          )}
          {showHint && (
            <div
            className=' mt-20 '
            >
              {quizData[index].hints?.slice(0,hintsIndex+1).map((hint, index) => {
                return (
                  <div key={index}>
                    <h1
                    className=' text-3xl font-Montserrat text-center p-5 '
                    >{hint}</h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
