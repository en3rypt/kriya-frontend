//create browser router

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../screens/Home";
import QuizPage from "../../components/ui/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/softwareDevQuiz",
    element: <Home />,
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
    path: "/delete",
    element: <Home />,
  },
]);
