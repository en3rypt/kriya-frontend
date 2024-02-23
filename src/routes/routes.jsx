//create browser router

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../screens/Home";
import QuizPage from "../../components/ui/QuizPage";
import DevelopersPage from "../../components/ui/DevelopersPage";
import QuizPageforDataScience from "../../components/ui/QuizPageforDataScience";
import ErrorHandlingPage from "../../components/ui/ErrorHandlingPage";
import Congrats from "../../components/shared/Congrats";
import ItsANoun from "../../components/ui/ItsANoun";
import Forms from "../../components/ui/Forms";
import GeneralInstructions from "../../components/shared/GeneralInstructions";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/developers",
    element: <DevelopersPage />,
  },
  {
    path: "/dsQuiz",
    element: <QuizPageforDataScience />,
  },
  {
    path: "/softwareDevQuiz",
    element: <QuizPage index={0} />,
  },
  {
    path: "/start",
    element: <QuizPage index={0} />,
  },
  {
    path: "/notes",
    element: <QuizPage index={1} />,
  },
  {
    path: "/create",
    element: <QuizPage index={2} />,
  },
  {
    path: "/text-edit",
    element: <QuizPage index={3} />,
  },
  {
    path: "/search",
    element: <QuizPage index={4} />,
  },
  {
    path: "/checklist",
    element: <QuizPage index={5} />,
  },
  {
    path: "/reminder",
    element: <QuizPage index={6} />,
  },
  {
    path: "/image-attachment",
    element: <QuizPage index={7} />,
  },
  {
    path: "/Congrats",
    element: <Congrats />,
  },
  {
    path: "/its-a-noun",
    element: <ItsANoun />,
  },
  {
    path: "*",
    element: <ErrorHandlingPage />,
  },
  {
    path: "/cyberSecurity",
    element: <Forms domain="cyber" />,
  },
  {
    path: "/instructions",
    element: <GeneralInstructions domain="cyber" />,
  },
  {
    path: "/general-instructions",
    element: <GeneralInstructions domain="cyber" />,
  },
]);

export default router;
