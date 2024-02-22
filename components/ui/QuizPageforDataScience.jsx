import {useState,useEffect} from 'react';
import { dataScienceClues } from '../../src/constants/dataScience';
import dataScienceQuizData from '../../src/constants/dataScienceConstants.json';
export default function QuizPageforDataScience() {
  const [checkPassword, setcheckPassword] = useState("");
  const [cluesIndex, setcluesIndex] = useState(0);
  const [isAnsCorrect,setisAnsCorrect] = useState(false);
  const [enteredPassword,setenteredPassword] = useState([]);
  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    const correctQuiz = dataScienceQuizData.find(
      (quiz) => quiz.password === checkPassword && !enteredPassword.includes(checkPassword)
    );
  
    if (correctQuiz) {
      setisAnsCorrect(true);
      setenteredPassword((prev) => [...prev, checkPassword]);
      console.log("first");
      localStorage.setItem("enteredPasswords", JSON.stringify(enteredPassword));
      setcluesIndex(cluesIndex + 1);
    } else {
      console.log("second");
      alert("Please enter a valid password");
    }
  
    setisAnsCorrect(false);
  };
  
  console.log(localStorage.getItem("enteredPasswords"));
  return (
    <div
    className=" h-[100vh] font-Montserrat grid place-content-center w-full "
    >
      {
        dataScienceQuizData.map((link,index)=>{
          return(
            <div
            key={index}
            className=' max-lg:flex-col my-auto p-4 text-lg flex items-center justify-evenly w-full space-x-10 '
            >
              {index+1})
              <a 
              href={link.formlink}
              target='_blank'
              >
                {link.formlink}
              </a>
              <input type="password" onChange={(e)=>{
                setcheckPassword(e.target.value);
              }}
              className=' rounded-lg bg-gray-400 px-4 py-2  '
              onKeyDown={(e)=>{
                if(e.keyCode === 13){
                  handleSubmitButtonClick(e);
                }
              }}
              />
              <button 
              type="submit"
              className=' font-Andika bg-gradient-to-r p-4 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold text-xl '
              onClick={handleSubmitButtonClick}
              >
                Submit
              </button>
            </div>
          )
        })
      }
      {
        cluesIndex > 0 && (
          <div>
          <h1>
            Clues:
          </h1>
          {
            dataScienceClues.slice(0,cluesIndex).map((clue,index)=>{
              return(
                <h2
                key={index}
                className=' font-Montserrat '
                >
                  <a className=' cursor-default ' href={clue} target='_blank'>{clue}</a>
                </h2>
              )
            })
          }
        </div>
        )
      }
    </div>
  )
}
