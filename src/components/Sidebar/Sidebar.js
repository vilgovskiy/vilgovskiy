import React from "react";

import TitlePicture from "../UI/TitlePicture/TitlePicture";
import TitleName from "../UI/TitleName/TitleName";
import Contacts from "../UI/Contacts/Contacts";
import Navigation from "../Navigation/Navigation";
import Toggler from "./Toggler/Toggler";

import "./Sidebar.css";
import Footer from "../UI/Footer/Footer";

const Sidebar = (props) => {


  let dynamicClass = props.active ? "" : " Hidden"

  return (
    <React.Fragment>
      <Toggler active={props.active} onClick={props.sidebarOpenHandler}/>
      <div className={"Sidebar" + dynamicClass}>
        <TitlePicture />
        <TitleName />
        <Contacts />
        <Navigation refs={props.refs} onClick={props.sidebarOpenHandler} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
