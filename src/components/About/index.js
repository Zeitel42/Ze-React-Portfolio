import React from "react";
import coverImage from "../../assets/cover/ZacnMolly.JPG";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2 about-img" alt="cover" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        possimus doloribus saepe blanditiis dolorem aliquid mollitia nisi
        perspiciatis quia earum, distinctio ipsa nesciunt accusantium
        repudiandae quod velit odit quidem ad.
      </p>
      <p>
        Molestiae eius doloremque earum nemo architecto provident dolores amet
        repellendus veniam harum nihil odit dolore deleniti, accusamus natus
        quia nulla id? Labore omnis accusantium, ipsum quo eos rerum neque
        accusamus?
      </p>
    </section>
    // <h1>This is the About me page</h1>
  );
}

export default About;
