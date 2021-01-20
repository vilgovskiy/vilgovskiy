import React, { useEffect, useRef } from "react";

import "./Navigation.css";

const Navigation = (props) => {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <nav className="Navigation">
      <a
        href="#introduction"
        ref={focusRef}
        onClick={props.onClick}
      >
        Introduction
      </a>
      <a href="#about"
        onClick={props.onClick}>
        About
      </a>
      <a href="#techstack"
        onClick={props.onClick}>
        Tech Stack
      </a>
      <a href="#other"
        onClick={props.onClick}>
        Other
      </a>
    </nav>
  );
};

export default Navigation;
