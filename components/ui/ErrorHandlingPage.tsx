import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorHandlingPage() {
  const navigate = useNavigate();
  return (
    <div
    className=' min-h-screen grid place-content-center font-Andika   '
    >
        <main
        className=' text-3xl bg-gradient-to-tr from-text-color to-text-color3 text-transparent bg-clip-text  '
        >
            You Tried Exploiting the Links!!
            <span> Punishment <span className=' text-white'>🤔</span></span>
            <p
             onClick={()=>{
                navigate("/softwareDevQuiz");
            }}
            className=' mt-10 text-center text-3xl bg-gradient-to-tr from-gradient2  to-text-color2 cursor-pointer text-transparent bg-clip-text  '
            > Start the Quiz Once Again <span className=' text-white'>🙃</span></p>
        </main>
    </div>
  )
}
