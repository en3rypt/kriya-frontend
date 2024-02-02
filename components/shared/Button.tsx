import React,{useState} from 'react'

export default function Button({text,index,setquizIndexQnNumber,onclick,quizDataLength}:{text:string,index:number,setquizIndexQnNumber:(index:number)=>void,onclick:()=>void,quizDataLength:number}) {
  const [showModal, setshowModal] = useState<boolean>(true);

  return (
    <div
    className=' mb-[10%] cursor-pointer'
    >
      {
        showModal && (
            <button
            className=' text-6xl  bg-gradient-to-r from-green-400 to-violet-400  text-transparent bg-clip-text '
            onClick={onclick}
            >
                {text}
            </button>
        )
      }
    </div>
  )
}