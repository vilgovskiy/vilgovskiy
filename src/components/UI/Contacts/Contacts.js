import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

import "./Contacts.css";

const contacts = () => (
  <table className="Contacts">
    <tbody>
      <tr>
        <td>
          <MdPhone />
        </td>
        <td>+1 (647) 839-8269</td>
      </tr>
      <tr>
        <td>
          <MdEmail />
        </td>
        <td>v.ilgovskiy@gmail.com</td>
      </tr>
      <tr>
        <td>
          <MdLocationOn />
        </td>
        <td>Toronto ON, Canada</td>
      </tr>
      <tr>
        <td>
          <AiFillLinkedin />
        </td>
        <td>
          <a href="https://www.linkedin.com/in/vladislav-ilgovskiy/">
            in/vladislav-ilgovskiy
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default contacts;
