import React from "react";
import coverImage from "../../assets/cover/ZacnMolly.JPG";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Zac Eitel</h1>
      <p>Web Developer</p>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
