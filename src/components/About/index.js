import React from "react";
import coverImage from "../../assets/images/ZacnMolly.JPG";

function About() {
  return (
    <section className="my-5 about-section">
      <h1 className="about-title">About Me</h1>
      <img src={coverImage} className="my-2 about-img" alt="cover" />
      <p className="about-bio">
        My name is Zac, and I am a builder. Whether it be a website, or via
        conventional commercial construction practices, or line construction
        that brings the internet to your town and neighborhood, or residential
        home improvement projects, or assembling a 100ft steel support structure
        underwater on the face of a dam, I can build it.
        <br />
        <br />
        All of these examples, while they differ in environment, can be
        approached in the same manner. It starts with a good idea, forming a
        solid plan, drafting a beautiful and functional design, and
        implementation of the common goal with collaboration, determination, and
        a strong work ethic.
        <br />
        <br />I am consistently learning and expanding my knowledge base.
        Currently, I have front end knowledge and experience with HTML, CSS,
        JavaScript, JQuery, NodeJS, React, and PHP. I have back end database
        knowledge and experience using MySQL and MongoDb.
      </p>
    </section>
    // <h1>This is the About me page</h1>
  );
}

export default About;
