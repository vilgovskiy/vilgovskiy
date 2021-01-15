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
        
      >
        Introduction
      </a>
      <a href="#about">
        About
      </a>
      <a href="#other">
        Other
      </a>
    </nav>
  );
};

export default Navigation;
