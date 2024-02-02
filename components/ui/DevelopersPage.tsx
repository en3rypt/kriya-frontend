import React from 'react'

export default function DevelopersPage() {
  const developedBy = [ 
    {
        name:"Mohamed Aklamaash",
        class:"Data Science 2k22"
    },
    {
        name:"Prathosini Devi",
        class:"Software Systems 2k22"
    },
    {
        name:"Sanjith",
        class:"Software Systems 2k19"
    }
  ]
  return (
    <div
    className=''
    >
       <h1
       className=' text-center font-bold py-10 text-4xl font-Andika text-teal-200 '
       style={{overflowY: 'hidden'}}
       >
            Developed By
        </h1>
        <main
        className=' grid place-content-center h-[30vmax] '
        >
            {
                developedBy.map((dev,index)=>{
                    return(
                        <table
                        key={index}
                        className=' flex space-x-10' 
                        >
                            <tr 
                            className=' font-Montserrat bg-gradient-to-t from-green-400 to-gray-400 font-semibold text-4xl text-transparent bg-clip-text '
                            >{dev.name}</tr>
                            <tr
                            className=' font-Montserrat bg-gradient-to-t from-gradient1  to-gray-400 font-semibold text-4xl text-transparent bg-clip-text '
                            >{dev.class}</tr>
                        </table>
                    )
                })
            }
        </main>
    </div>
  )
}
