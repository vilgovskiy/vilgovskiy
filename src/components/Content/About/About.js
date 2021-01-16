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
        <p>I am a a full-stack software developer, based in Toronto, ON <FaMapMarkerAlt/></p>
        <p>I have experience developing software for public cloud, containers and </p>
            
      </div>
    </section>
  );
});

export default About;
