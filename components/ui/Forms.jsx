import React, { useEffect,useState } from 'react'

export default function Forms({domain}) {
  const [formsURL, setformsURL] = useState("");
  useEffect(()=>{
    domain === "cyber" ? setformsURL("https://forms.gle/sYJXxuy34sJ4Czmk7"):""
  },[])
  console.log(formsURL);
  return (
    <div
    className=' '
    >
     <main
     className=' grid  place-content-center h-[100vh]  '
     >
        <a href={formsURL} 
        target='_blank'
        >
            Click To Start the Quiz
        </a>
     </main>
    </div>
  )
}
