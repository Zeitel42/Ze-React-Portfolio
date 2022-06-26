import React from "react";
import coverImage from "../../assets/cover/ZacnMolly.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Zac Eitel</h1>
      <p>Web Developer</p>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "90%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
