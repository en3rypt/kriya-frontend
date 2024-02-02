import QuizPage from "../components/ui/QuizPage";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
import ErrorHandlingPage from "../components/ui/ErrorHandlingPage";
import ItsANoun from "../components/ui/ItsANoun";
import DevelopersPage from "../components/ui/DevelopersPage";
import QuizPageforDataScience from "../components/ui/QuizPageforDataScience";
import quizDataForSoftwareDev from "./constants/questions.json";
import React from "react";

function App() {
  const quizData = quizDataForSoftwareDev;
  const [quizIndexQnNumber, setquizIndexQnNumber] = useState(0);
  return <div className=" bg-background-color min-h-screen  text-white overflow-hidden ">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/softwareDevQuiz" element={<QuizPage index={quizIndexQnNumber} setquizIndexQnNumber={setquizIndexQnNumber} quizData={quizData}/>}  />
        <Route path="/itsNoun" element={<ItsANoun/>}/>
        <Route path="/developers" element={<DevelopersPage/>}/>
        {/*    Later change the Quiz Data Page for Data Science      */}
        <Route path="/dsQuiz" element={<QuizPageforDataScience index={quizIndexQnNumber} setquizIndexQnNumber={setquizIndexQnNumber} quizData={quizData}/>}/>
        <Route path="*" element={<ErrorHandlingPage/>}/>
      </Routes>
    </Router>
  </div>
}

export default App;
