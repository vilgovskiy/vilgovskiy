import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <section id="timeline" className="Timeline">
        <p>My timeline:</p>
      <div className="Timeline-container">
        <div className="Timeline-item" date-is="5/2019-12/2020">
          <h1>Technical Analyst @ Densify</h1>
          <p>Built platforms and services for both client and internal usage. Communicated with interested parties and evolved solutions based on feedback. Built resilient and secure applications that worked with sensitive data and interacted directly with clients cloud environments.</p>
          <p>Some of my contributions can be found on <a href='https://github.com/densify-dev'>Densify public GitHub page</a> </p>
        </div>
        <div className="Timeline-item" date-is="5/2017-9/2018">
          <h1>Co-Op Java Developer @ Intact Financial Corporation</h1>
          <p>Back-end Java software development role. Work on data conversion project that connects modern Web application to legacy mainframe book of record. </p>
        </div>
        <div className="Timeline-item" date-is="9/2014-5/2019">
          <h1>Electrical & Computer Engineering Student @ University of Toronto</h1>
          <p>Electrical and Computer Engineering student, specializing in Software engineering and Control systems. Wa part of residence council as VP Academics. Played on Tri-Campus competitive Volleyball team.</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
