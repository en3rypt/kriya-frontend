import QuizPage from "../components/ui/QuizPage";
import Home from "./screens/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return <div className=" bg-background-color min-h-screen text-white  ">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/softwareDevQuiz" element={<QuizPage index={0}/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
