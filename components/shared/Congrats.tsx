import React from 'react'
import "./Congrats.module.css";
import { useNavigate } from 'react-router-dom';
export default function Congrats() {
  const navigate = useNavigate();
  return (
    <div className='  '
    >
        <h1
        className=' text-4xl px-6 text-center py-8 font-semibold text-text-color font-Andika  '
        >
          Congrats
        </h1>
        <div
        className=' h-[37vmax] grid place-content-center '
        >
            <button
            onClick={()=>{
                navigate("/developers");
            }}
            className=' text-xl font-Andika bg-green-400 text-transparent bg-clip-text  '
            >
                Want to Know Who Created This?
                <span className=' bg-gradient-to-t from-gradient1 to-gradient2 text-transparent bg-clip-text  '>Click Here</span>
            </button>
        </div>
    </div>
  )
}
