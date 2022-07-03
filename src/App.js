import React from "react";
import About from "./components/About";
import Header from "./components/Header";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
// import Resume from "./components/Resume";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = About;
      break;
    case "/Project":
      Component = Project;
      break;
    // case "/Contact":
    //   Component = Contact;
    //   break;
    // case "/Resume":
    //   Component = Resume;
    //   break;
    default:
      Component = About;
  }
  return (
    <div>
      <Header />
      <main className="main"></main>
      <Component />
      <Footer />
    </div>
  );
}

export default App;
