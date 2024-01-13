import "./App.css";
import React from "react";
import About from "./Props/Components/About";
import Home from "./Props/Components/Home";
import Header from "./Props/Components/Header";
import Services from "./Props/Components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home   title="I am Home Page"/>} />
        <Route path="/About" element={<About title="I am About Page"/>} />
        <Route path="/Contact" element={<Contact title="I am Contact Page"/>} />
        <Route path="/Services" element={<Services title="I am Contact Page"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
