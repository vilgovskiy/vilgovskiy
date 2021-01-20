import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Toggler from '../Sidebar/Toggler/Toggler';

import "./Layout.css";

const Layout = (props) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const sidebarOpenHandler = () => setSidebarActive(!sidebarActive)
  const sidebarCloseHandler = () => setSidebarActive(false)

  let backdrop = null;
  if (sidebarActive) {
    backdrop = <div className="Backdrop" onClick={sidebarCloseHandler}></div>
  }

  return (
    <div>
      <Toggler active={sidebarActive} onClick={sidebarOpenHandler}/>
      <Sidebar refs={props.refs} active={sidebarActive} sidebarCloseHandler={sidebarCloseHandler}/>
      {backdrop}
      <div className="ContentContainer">{props.children}</div>
    </div>
  );
};

export default Layout;
