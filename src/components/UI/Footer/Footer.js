import React from "react";

import { AiFillHeart } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>
        Made by Vlad with{" "}
        <span style={{ color: "red" }}>
          <AiFillHeart id="heart" />
        </span>{" "}
        and{" "}
        <span style={{ color: "#5ed3f3" }}>
          <FaReact />
        </span>
      </p>
    </div>
  );
};

export default Footer;
