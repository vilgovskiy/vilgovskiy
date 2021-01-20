import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";

const Layout = (props) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const sidebarOpenHandler = () => setSidebarActive(!sidebarActive)

  let backdrop = null;
  if (sidebarActive) {
    backdrop = <div className="Backdrop" onClick={sidebarOpenHandler}></div>
  }

  return (
    <div>
      <Sidebar refs={props.refs} active={sidebarActive} sidebarOpenHandler={sidebarOpenHandler}/>
      {backdrop}
      <div className="ContentContainer">{props.children}</div>
    </div>
  );
};

export default Layout;
