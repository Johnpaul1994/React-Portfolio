import React from "react";
import "./index.css";
import Home from "./routes/home"
import Contact from "./routes/contact";
import Project from "./routes/Project";
import About from "./routes/About";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
  );
}

export default App;
