import React from "react";
import {NavLink} from "react-router-dom";
import "../Style/Navbar.css";
import avatar from "../myAvatar.png"
import LazyImage from "./LazyImage";
import placeholderImg from "../placeholder.png"; 

const Navbar = () => {
    return(
        <header>
        <nav className="nav-container">
        <NavLink to="/">
            <LazyImage placeholder={placeholderImg} src={avatar} alt="Avatar Logo" classStyle={"avatar-img"} />
        </NavLink>
            <div className="navigator-links">
                <ul className="nav-links">
                    <NavLink exact to="/"><li>Home</li></NavLink>
                    <NavLink exact to="/about" activeClassName="active"><li>About Me</li></NavLink>
                    <NavLink exact to="/portfolio" activeClassName="active"><li>Portfolio </li></NavLink>
                    <NavLink exact to="/find" activeClassName="active"><li>Find Me</li></NavLink>  
                </ul>
            </div>
        </nav>
        </header>
        )
    }
    
    export default Navbar;