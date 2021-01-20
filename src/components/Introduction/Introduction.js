import React from "react";
import "./Introduction.css";
const Introduction = React.forwardRef((props, ref) => {
  return (
    <header ref={ref} id="introduction" className="Introduction">
      <div>
        <h1>Vladislav Il'govskiy</h1>
        <h2>CLOUD & FULL-STACK DEVELOPER</h2>
      </div>
    </header>
  );
});

export default Introduction;
