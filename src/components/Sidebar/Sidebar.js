import React from "react";

import TitlePicture from '../UI/TitlePicture/TitlePicture';
import TitleName from '../UI/TitleName/TitleName';
import Contacts from '../UI/Contacts/Contacts';
import Navigation from '../Navigation/Navigation';

import "./Sidebar.css";
import Footer from "../UI/Footer/Footer";

const sidebar = (props) => {
  return <div className="Sidebar">
      <TitlePicture />
      <TitleName />
      <Contacts />
      <Navigation refs={props.refs}/>
      <Footer />
      
      {/* Picture
      Name
      email
      phone????
      linked in
      
      links:
      about
      etc*/}
  </div>;
};

export default sidebar;