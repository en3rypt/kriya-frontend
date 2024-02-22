import {useState} from 'react';
import { dataScienceClues } from '../../src/constants/dataScience';
import dataScienceQuizData from '../../src/constants/dataScienceConstants.json';
export default function QuizPageforDataScience() {
  const [checkPassword, setcheckPassword] = useState("");
  const [cluesIndex, setcluesIndex] = useState(0);
  const [enteredPassword,setenteredPassword] = useState([]);
  const handleSubmitButtonClick = async (e,index) => {
    e.preventDefault();
      let isCorrect = false;
      dataScienceQuizData?.forEach((quiz,indexMap)=>{
        console.log(quiz);
        if(quiz?.password === checkPassword && indexMap === index && !enteredPassword.includes(checkPassword)){
          isCorrect = true;
          setenteredPassword((prev) => [...prev, checkPassword]);
          const submittedFormsIndex = JSON.parse(localStorage.getItem('submittedFormsIndex')) || [];
          submittedFormsIndex.push(index);
          localStorage.setItem('submittedFormsIndex', JSON.stringify(submittedFormsIndex));      
          setcluesIndex(cluesIndex + 1);     

        }
      });
    
    if(!isCorrect){
      alert("Please Enter a valid Password");
    }
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
              {/* {index+1}) */}
              <div
              >
                <a 
                href={link.formlink}
                target='_blank'
                className=' cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-2 '
                >
                  {link.name}
                </a>
              </div>
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
              className=' font-Andika text-center ml-[100px] bg-gradient-to-r p-4 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold text-xl '
              onClick={(e)=>{
                handleSubmitButtonClick(e,index);
              }}
              >
                Submit
              </button>
                ):<button 
                className=' font-Andika bg-gradient-to-r p-4 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold text-xl '
                >
                  Already Done
                </button>
              }
            </div>
          )
        })
      }
      <div
      className=' mt-24 w-4/6 mx-auto '
      >
      {
        answeredFormsIndex?.length > 0 && (
          <div 
          className=' leading-10  '
          >
          <h1
          className=' bg-gradient-to-br text-transparent bg-clip-text text-4xl font-bold font-Andika from-[#01D796] via-orange-400 to-pink-300 '
          >
            Clues:
          </h1>
          {
            dataScienceClues.slice(0,Math.floor(answeredFormsIndex?.length/2)).map((clue,index)=>{
              return(
                <h2
                key={index}
                className=' text-center '
                >
                  <a className=' cursor-default text-lg font-Montserrat font-semibold ' href={clue} target='_blank'>{clue}</a>
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
