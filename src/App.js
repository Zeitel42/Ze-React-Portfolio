import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";
import "./assets/css/style.css";

function App() {
  return (
    <div className="bg-gray-800">
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <main className="container"></main>

      <Footer />
    </div>
    // <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    //   <div className="ml-6 pt-1">
    //     <h1 className="text-mammoth">Tailwind and Create React App</h1>
    //     <p className="text-base text-gray-700 leading-normal">
    //       Building apps together
    //     </p>
    //   </div>
    // </div>
  );
}

export default App;
