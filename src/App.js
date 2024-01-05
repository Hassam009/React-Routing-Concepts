import "./App.css";
import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home   title="I am Home Page"/>} />
        <Route path="/About" element={<About title="I am About Page"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
