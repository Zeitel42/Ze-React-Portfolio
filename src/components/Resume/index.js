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
          here
        </a>{" "}
        to download a pdf
      </p>

      <img src={resumeImage} className="my-4" />
    </div>
  );
}

export default Resume;
