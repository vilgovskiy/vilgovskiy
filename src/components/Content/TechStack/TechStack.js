import React from "react";
import {
  SiGo,
  SiJava,
  SiJavascript,
  SiPython,
  SiRuby,
  SiPostgresql,
  SiHtml5,
  SiReact,
  SiNodeDotJs,
  SiJquery,
  SiBootstrap,
  SiRails,
  SiKubernetes,
  SiHelm,
  SiDocker,
  SiRedhatopenshift,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiJenkins,
  SiHarbor,
  SiPrometheus,
  SiGit,
  SiApachemaven,
  SiJira,
  SiVisualstudiocode
} from "react-icons/si";

import "./TechStack.css";

const TechStack = () => {
  return (
    <section id="techstack" className="TechStack">
      <p>Technologies I have experience with:</p>
      <div className="StackSection">
        <p>Languages:</p>
        <ul>
          <li>
            <SiGo />
            Go
          </li>
          <li>
            <SiJava />
            Java
          </li>
          <li>
            <SiJavascript />
            JavaScript
          </li>
          <li>
            <SiPython />
            Python
          </li>
          <li>
            <SiRuby />
            Ruby
          </li>
          <li>
            <SiPostgresql />
            SQL
          </li>
          <li>
            <SiHtml5 />
            HTML + CSS
          </li>
        </ul>
      </div>
      <div className="StackSection">
        <p>Libraries and Frameworks:</p>
        <ul>
          <li>
            <SiReact />
            React
          </li>
          <li>
            <SiNodeDotJs />
            Node.js
          </li>
          <li>Express.js</li>
          <li>
            <SiJquery />
            jQuery
          </li>
          <li>
            <SiBootstrap />
            Bootstrap
          </li>
          <li>
            <SiRails size={30} />
            Rails
          </li>
          <li>Pandas</li>
          <li>NumPy</li>
        </ul>
      </div>
      <div className="StackSection">
        <p>Tools and Platforms:</p>
        <ul>
          <li><SiKubernetes/>Kubernetes</li>
          <li><SiHelm/>Helm</li>
          <li><SiDocker/>Docker</li>
          <li><SiRedhatopenshift/>OpenShift</li>
          <li><SiAmazonaws/>AWS</li>
          <li><SiGooglecloud/>GCP</li>
          <li><SiMicrosoftazure/>Azure</li>
          <li><SiJenkins/>Jenkins</li>
          <li><SiHarbor/>Harbor</li>
          <li><SiPrometheus/>Prometheus</li>
          <li><SiGit/>git</li>
          <li><SiApachemaven/>Maven</li>
          <li><SiJira/>Jira</li>
          <li><SiVisualstudiocode/>VSCode</li>
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
