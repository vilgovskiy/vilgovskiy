import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";

const layout = (props) => {
  return (
    <div>
      <Sidebar refs={props.refs} />
      <div className="ContentContainer">{props.children}</div>
    </div>
  );
};

export default layout;
