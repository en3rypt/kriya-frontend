import {useState} from 'react';
import { dataScienceClues } from '../../src/constants/dataScience';
import dataScienceQuizData from '../../src/constants/dataScienceConstants.json';
export default function QuizPageforDataScience() {
  const [checkPassword, setcheckPassword] = useState("");
  const [cluesIndex, setcluesIndex] = useState(0);
  const [isAnsCorrect,setisAnsCorrect] = useState(false);
  const [enteredPassword,setenteredPassword] = useState([]);
  const handleSubmitButtonClick = (e,index) => {
    e.preventDefault();
    const correctQuiz = dataScienceQuizData.find(
      (quiz) => quiz.password === checkPassword && !enteredPassword.includes(checkPassword)
    );
    if (correctQuiz) {
      setisAnsCorrect(true);
      setenteredPassword((prev) => [...prev, checkPassword]);
      const submittedFormsIndex = JSON.parse(localStorage.getItem('submittedFormsIndex')) || [];
      submittedFormsIndex.push(index);
      localStorage.setItem('submittedFormsIndex', JSON.stringify(submittedFormsIndex));      
      setcluesIndex(cluesIndex + 1);
    } else {
      alert("Please enter a valid password");
    }
    setisAnsCorrect(false);
  };
  const answeredFormsIndex = localStorage.getItem('submittedFormsIndex');
  return (
    <div>
      <h1 className=' text-center bg-gradient-to-tl from-teal-400 via-pink-400 to-orange-400 text-transparent bg-clip-text  font-bold text-4xl mt-[4%] '>
        Enter Into The Links To Start Your Quiz 
      </h1>
    <div
    className=" p-10 mt-[5%] max-md:mt-[50px] font-Montserrat grid place-content-center w-full "
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
              className=' underline cursor-pointer '
              >
                {link.formlink}
              </a>
              <input type="password" onChange={(e)=>{
                setcheckPassword(e.target.value);
              }}
              className=' rounded-lg bg-gray-400 px-4 py-2  '
              onKeyDown={(e)=>{
                if(e.key === "Enter"){
                  handleSubmitButtonClick(e,index);
                }
              }}
              />
              {
               !answeredFormsIndex?.includes(index) ? (
                <button 
              type="submit"
              className=' font-Andika bg-gradient-to-r p-4 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold text-xl '
              onClick={(e)=>{
                handleSubmitButtonClick(e,index);
              }}
              >
                Submit
              </button>
                ):""
              }
            </div>
          )
        })
      }
      <div
      className=' mt-24 '
      >
      {
        answeredFormsIndex?.length > 0 && (
          <div 
          className=' leading-10  '
          >
          <h1>
            Clues:
          </h1>
          {
            dataScienceClues.slice(0,Math.floor(answeredFormsIndex?.length/2)).map((clue,index)=>{
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
    </div>
    </div>
  )
}
