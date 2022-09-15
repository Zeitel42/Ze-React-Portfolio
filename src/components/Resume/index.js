import { React } from "react";
// import { FaJsSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import resumeImage from "../../assets/images/ze-resume-img.png";
import filePath from "../../assets/ZEResumeFSWD.pdf";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiInsomnia } from "react-icons/si";

function Resume() {
  const proficiencies = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Javascript",
      icon: <FaJsSquare />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Expressjs",
      icon: <SiExpress />,
    },
    {
      name: "Nodejs",
      icon: <FaNode />,
    },
    {
      name: "Graphql",
      icon: <SiGraphql />,
    },
    {
      name: "Sequelize",
      icon: <SiSequelize />,
    },
    {
      name: "HandleBars",
      icon: <SiHandlebarsdotjs />,
    },
    {
      name: "Jquery",
      icon: <SiJquery />,
    },
    {
      name: "MySql",
      icon: <SiMysql />,
    },
    {
      name: "MongoDb",
      icon: <SiMongodb />,
    },
    {
      name: "Apollo",
      icon: <SiApollographql />,
    },
    {
      name: "Insomnia",
      icon: <SiInsomnia />,
    },
  ];

  return (
    <div className="grid">
      <p className="mt-36 text-white">
        Click{" "}
        <a href={filePath} target="_blank" className="text-blue-500">
          <button>here</button>
        </a>{" "}
        to download a pdf of my resume!
      </p>
      <h2 className="bg-white rounded-md p-2">
        Current proficiencies include:
      </h2>
      <div className="grid grid-cols-3">
        {proficiencies.map((icon) => (
          <div className="w-1/5 h-auto border border-black rounded bg-white mt-2 ">
            <div className="grid mt-8 justify-items-center content-center">
              <h2 className="text-sm">{icon.name}</h2>
              <div className="text-2xl pb-8">{icon.icon}</div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Resume;
