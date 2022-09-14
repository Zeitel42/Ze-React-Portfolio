import React, { useState } from "react";

const ProjectList = ({ projectName }) => {
  const [projects] = useState([
    {
      name: "Sapient",
      languages: "MERN Stack",
      link: "https://sapient-origin.herokuapp.com/",
      github:
        "https://github.com/Zeitel42/Sapient-Community-Outreach-Application",
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

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5 place-items-center">
        {projects.map((project) => (
          <div className="w-4/5" key={project.name}>
            <a href={project.name}>
              <h2 className="text-4xl text-orange-400">{project.name}</h2>
            </a>
            <div className="w-68 h-52 object-fit">
              <a href={project.link}>
                <img
                  src={require(`../../assets/images/${project.name}.png`)}
                  alt={project.name}
                  className="object-cover min-h-full mx-1 border border-black rounded shadow-lg hover:shadow-white"
                  // onClick={() => toggleModal(project, i)}
                  key={project.name}
                />
              </a>
            </div>
            <p className="text-base text-orange-300">
              Built with: {project.languages}
            </p>

            <p className="text-sm">
              {project.name} GitHub Repo click{" "}
              <a className="text-orange-500" href={project.github}>
                here
              </a>
              .
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
