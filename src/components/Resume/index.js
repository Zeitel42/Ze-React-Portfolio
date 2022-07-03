import { React, useState } from "react";

function Resume() {
  const [prevWork] = useState([
    {
      company: "UCC",
      title: "Foreman, Diver/Mechanic, VT-1/VT-3 Inspector",
      duration: "2004-2014",
    },
    {
      company: "ATT",
      title: "Outside Plant Technician, Wire Technician",
      duration: "2015-2019",
    },
  ]);

  return (
    <div className="resume">
      <header>
        <h1>Zac Eitel</h1>
        <h2>Junior Web Developer</h2>
        <ul>
          <li>Phone: 269.861.6727</li>
          <li>
            Email: <a href="mailto: zaceitel@gmail.com">zaceitel@gmail.com</a>
          </li>
          <li>Chapel Hill, NC USA</li>
          <li>
            GitHub click <a href="https://github.com/Zeitel42">here</a>.
          </li>
          <li>
            LinkedIn click
            <a href="https://www.linkedin.com/in/zac-eitel-54709022a/">here</a>.
          </li>
        </ul>
      </header>
      <section>
        <h2>Objective</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          quae ipsa animi necessitatibus earum harum, fuga reprehenderit rerum
          nesciunt accusantium qui hic numquam quam, quo distinctio. Velit
          mollitia autem incidunt?
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>Marshall High School 1994</li>
          <li>Divers Institute of Technology 2004</li>
          <li>UNC Coding Bootcamp 2022</li>
        </ul>
      </section>
      <section>
        <h2>Work Experience</h2>
        {prevWork.map((work) => (
          <div>
            <h3 className="company">{work.company}</h3>
            <h4 className="title">Title: {work.title}</h4>
            <h4 className="duration">From: {work.duration}</h4>
          </div>
        ))}
      </section>
      <section>
        <h2>Technical Skills</h2>
      </section>
      <section>
        <h2>Certifications</h2>
      </section>
    </div>
  );
}

export default Resume;
