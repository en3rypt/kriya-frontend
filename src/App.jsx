import QuizPage from "../components/ui/QuizPage";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
function App() {
  const [quizIndexQnNumber, setquizIndexQnNumber] = useState(0);
  return <div className=" bg-background-color min-h-screen text-white  ">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/softwareDevQuiz" element={<QuizPage index={quizIndexQnNumber} setquizIndexQnNumber={setquizIndexQnNumber}/>}  />
      </Routes>
    </Router>
  </div>;
}

export default App;
