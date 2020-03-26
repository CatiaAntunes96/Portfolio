import React from "react";
import "../Style/About.css";
import { IconContext } from "react-icons";
import {IoLogoHtml5} from "react-icons/io";
import {FaCss3Alt} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import Me from "../Images/Me.jpg";
import LazyImage from "./LazyImage";
import placeholderImg from "../placeholder.png"; 

const About = () => {
    return (
        <div className="container">
             <LazyImage placeholder={placeholderImg} src={Me} alt="Image of Myself" classStyle={"me-img"}/>
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <h3 className="about-intro">Find out who I am and what I'm all about</h3>
            <div className="about-description">
            <p>My name is Cátia and I´m a junior front-end developer.<br></br>
            I have a degree on physical therapy and I`m currently working on this area.
            However, I always had a passion for technology and and in the last year I started to expand my knowledge in programming. </p>
            So now, I want to expand my skills and knowledge and start to put them in action!<br></br>
            <p>I love to read, do exercise, animals, watch TV series and learn new things.</p>
            <br></br>
            <h1 className="about-title">My Skills</h1>
            <p>I know how to work with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, mainly on <b>React</b> environment. I also can work with jQuery and Sass. </p>
            <div className="icons-about">
            <IconContext.Provider value={{size: "3.5em", color: "#474242"}}>
            <IoLogoHtml5 />
            <FaCss3Alt />
            <DiJavascript />
            <FaReact />
            </IconContext.Provider>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About;