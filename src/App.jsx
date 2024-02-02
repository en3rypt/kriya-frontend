import QuizPage from "../components/ui/QuizPage";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
import ErrorHandlingPage from "../components/ui/ErrorHandlingPage";
import ItsANoun from "../components/ui/ItsANoun";
import DevelopersPage from "../components/ui/DevelopersPage";
function App() {
  const [quizIndexQnNumber, setquizIndexQnNumber] = useState(0);
  return <div className=" bg-background-color min-h-screen text-white ">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/softwareDevQuiz" element={<QuizPage index={quizIndexQnNumber} setquizIndexQnNumber={setquizIndexQnNumber}/>}  />
        <Route path="*" element={<ErrorHandlingPage/>}/>
        <Route path="/itsNoun" element={<ItsANoun/>}/>
        <Route path="/developers" element={<DevelopersPage/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
