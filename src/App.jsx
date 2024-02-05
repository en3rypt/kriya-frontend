import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className=" bg-background-color min-h-screen  text-white overflow-hidden ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
