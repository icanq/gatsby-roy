import React from "react";
import { FaHeart, FaGithub } from "react-icons/fa";
import "./style.scss";

export default function Closing() {
  return (
    <div className="footer-container">
      <p>
        With <FaHeart className="icon" /> <br />
        Roy &amp; Nesya
      </p>
    </div>
  );
}
