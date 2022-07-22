import React from "react";
import ProjectList from "../ProjectList";

function Project(props) {
  const { currentProject } = props;
  return (
    <div className="h-full mx-12 flex rounded-lg shadow-xl justify-items-center bg-gray-800">
      <section className="pt-28 mt-3 pb-4 text-4xl text-white text-left">
        <h1 className="">Projects!</h1>
        <h2></h2>
        <ProjectList />
      </section>
    </div>
  );
}
export default Project;
