import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Header />
      <main className="main"></main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
