import React from "react";

import AboutImage from "../../../assets/images/about.jpg";
import { FaHandPointRight, FaMapMarkerAlt } from "react-icons/fa";
import "./About.css";
import "../Content.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="About">
      {/* A larger picture */}
      {/* H3 Hello, My name is Vlad */}
      {/* Paragraph about me */}
      <div>
      <img
            src={AboutImage}
            alt=""
          />
        <p style={{ textAlign: "right"}}>
          Hello, My name Is Vlad and this is me. <FaHandPointRight/>{" "}
        </p>
        <p>I am a young hardworking cloud and full-stack software developer, based in Toronto, ON <FaMapMarkerAlt/></p>
        <p>Enjoy working in dynamic, fast-paced environments where people are dedicated to what they do, take ownership of their work and are willing to collaborate in order to achieve best results.</p>
        <p>Passionate learner, always willing to pick up new tech and apply my skills to solving complex real-life problems with code.</p>
        <p>I have experience working with public cloud and containers, creating services and integrations that allow users to have best experience when interacting with products and services related to cloud.</p>
        <p>I also design CI/CD workflows for cloud and containers deployments as well as Infrastructure as Code templates.</p>
      </div>
    </section>
  );
});

export default About;
