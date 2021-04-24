import React from "react";
import "../Style/Find.css";
import { FaGithub } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IconContext } from "react-icons";

const Find = () => {
  return (
    <div className="find-container">
      <h1 style={{ color: "#086577" }}>You can find me on:</h1>
      <div className="icons">
        <IconContext.Provider value={{ color: "#474242", size: "3.5em" }}>
          <a
            href="https://github.com/CatiaAntunes96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.freecodecamp.org/catia_antunes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFreeCodeCamp />
          </a>
          <a
            href="https://www.linkedin.com/in/c%C3%A1tia-antunes-b37823210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
      <h2 style={{ color: "#086577a1" }}>Or you can contact me:</h2>
      <span className="icons">
        <IconContext.Provider value={{ color: "#4b4b4bd1", size: "3.5em" }}>
          <a href="mailto:catiaantunes8@gmail.com">
            <GoMail />
          </a>
        </IconContext.Provider>
      </span>
    </div>
  );
};

export default Find;
