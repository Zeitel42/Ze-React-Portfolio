import React, { useState } from "react";
// import Modal from "../Modal";

const ProjectList = ({ projectName }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      name: "Run Buddy",
      languages: "HTML, CSS",
      link: "https://Zeitel42.github.io/run-buddy/",
      github: "https://github.com/Zeitel42/run-buddy",
    },
    {
      name: "Weather Dashboard",
      languages: "HTML, JS, JQuery, Bootstrap, API",
      link: "https://zeitel42.github.io/ZE-Weather-Dashboard/",
      github: "https://github.com/Zeitel42/ZE-Weather-Dashboard",
    },
    {
      name: "Note Taker",
      languages: "JS, JQuery, Node.js, Express.js",
      link: "https://zeitel42-note-taker.herokuapp.com/notes",
      github: "https://github.com/Zeitel42/Note-Taker",
    },
    {
      name: "LiveHire",
      languages: "MVC, Handlebars, JS, Node.js, Express.js, API",
      link: "https://gentle-dawn-52689.herokuapp.com/",
      github: "https://github.com/Zeitel42/LiveHire",
    },
    {
      name: "ACC Game Finder",
      languages: "HTML, CSS, Materialize, JS, JQuery, Leaflet, API",
      link: "https://mikekuney.github.io/ACC-Game-Finder/",
      github: "https://github.com/Zeitel42/ACC-Game-Finder",
    },
    {
      name: "Quick Quiz",
      languages: "HTML, CSS, JS",
      link: "https://zeitel42.github.io/ZE-QUICK-QUIZ/",
      github: "https://github.com/Zeitel42/ZE-QUICK-QUIZ",
    },
  ]);
  // const currentProjects = projects.filter(
  //   (project) => project.name === projectName
  // );

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )} */}
      <div className="flex-row">
        {projects.map((project, i) => (
          <div className="project-div">
            <h2 className="project-title">
              <a href={project.name}>{project.name}</a>
            </h2>
            <p>Built with: {project.languages}</p>
            <a href={project.link}>
              <img
                src={require(`../../assets/small/${project.name}.png`)}
                alt={project.name}
                className="img-thumbnail mx-1"
                // onClick={() => toggleModal(project, i)}
                key={project.name}
              />
            </a>
            <p>
              {project.name} GitHub Repo click <a href={project.github}>here</a>
              .
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
