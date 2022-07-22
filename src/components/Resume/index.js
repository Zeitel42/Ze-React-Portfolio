import { React } from "react";
import { Link } from "react-router-dom";
import resumeImage from "../../assets/images/ze-resume-img.png";
import filePath from "../../assets/ze-resume.pdf";

function Resume() {
  return (
    <div className="resume grid grid-col-1 justify-items-center">
      <p className="mt-36 text-white">
        Click{" "}
        <a href={filePath} target="_blank" className="text-blue-500">
          <button>here</button>
        </a>{" "}
        to download a pdf of my resume!
      </p>
      <h2>Current proficiencies include:</h2>
      <ul className="text-white m-4">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Express.js</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>Sequelize</li>
        <li>Handlebars</li>
        <li>JQuery</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Node.js</li>
        <li>Git</li>
      </ul>

      {/* <img src={resumeImage} className="my-4" /> */}
    </div>
  );
}

export default Resume;
