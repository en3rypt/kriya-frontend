import React from 'react';
import QuizPage from './QuizPage';
import Button from '../shared/Button';
export default function QuizPageforDataScience({ index,setquizIndexQnNumber,quizData }) {
  
  return (
    <div
    className=' mt-[-2%] '
    >
        <QuizPage index={index} setquizIndexQnNumber={setquizIndexQnNumber} quizData={quizData}  />
        <div
        className=' flex w-1/2 mx-auto justify-between '
        >
          <Button text={`${index === 0?"":"Prev"}`} quizDataLength={quizData.length}  index={index} setquizIndexQnNumber={setquizIndexQnNumber} onclick={()=>{
            if(index <= 0){
              setquizIndexQnNumber(0);
            }
            else{
              setquizIndexQnNumber((prev)=>(prev-1) % quizData.length);
            }
          }}/>
          <Button text={`${index === quizData.length - 1?"":"Next"}`} quizDataLength={quizData.length} index={index} setquizIndexQnNumber={setquizIndexQnNumber} onclick={()=>{
            setquizIndexQnNumber((prev)=>(prev+1) % quizData.length);
          }}/>
        </div>
    </div>
  )
}
