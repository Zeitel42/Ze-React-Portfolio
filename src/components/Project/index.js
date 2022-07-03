import React from "react";
import ProjectList from "../ProjectList";

function Project(props) {
  const { currentProject } = props;
  return (
    <section className="">
      <h1 className="section-title">Welcome to my Portfolio!</h1>
      <ProjectList projectName={currentProject} />
    </section>
  );
}
export default Project;
