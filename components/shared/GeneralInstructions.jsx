import React from 'react';
import DomainSpecifiedInstructions from './DomainSpecifiedInstructions';
import { useLocation } from 'react-router-dom';
export default function GeneralInstructions({domain}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const specifiedDomain = params.get('domain');
  console.log(specifiedDomain);
  return (
    <div>
        <main>
            <h1 className=' font-Andika text-center bg-gradient-to-tr from-pink-500 to-text-color  bg-clip-text text-transparent text-4xl p-10 font-bold ' >
                GENERAL INSTRUCTIONS
            </h1>
        </main>
        <main
        className=' w-5/6 mx-auto font-Montserrat leading-8 font-semibold text-lg grid place-content-center text-decoration-none '
        >
            <ul>
                <li
                key={1}
                >
                    i)Participants should arrive at the venue at least 15 minutes before the scheduled start time to
                    allow for seating and preparation.
                </li>
                <li
                    key={2}
                >
                    ii)Manage your time effectively during the exam. Pace yourself to ensure that you have enough
                    time to complete the given task within the allotted time frame.
                </li>
                <li
                    key={3}
                >
                    iii)The first and second rounds have durations of 45 mins and 90 minutes, respectively.
                </li>
                <li
                    key={4}
                >
                    iv)Do not engage in any form of cheating, plagiarism, or unauthorized collaboration with other
                    participants.
                </li>
                <li
                    key={5}
                >
                    v)If you have any questions or need clarification on any aspect, contact the team for assistance.
                </li>
            </ul>
        </main>
        <DomainSpecifiedInstructions domain={specifiedDomain}/>
    </div>
  )
}
