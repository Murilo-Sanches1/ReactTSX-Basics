import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import ToDoHome from "./projects/1-ToDo/ToDoHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/to-do" element={<ToDoHome />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
