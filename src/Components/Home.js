import React  from "react";
import "../Style/Home.css";
import Avatar from "../myAvatar.png";
import LazyImage from "./LazyImage";
import placeholderImg from "../placeholder.png"; 

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-title">
                <h1 className="title-presentation color-title">Cátia</h1>
                <h1 className="title-presentation subtitle">Front-End Developer</h1>
                    <LazyImage placeholder={placeholderImg} src={Avatar} alt="Avatar Image" classStyle={"home-img"}/>
            </div>z
       </div>
    )
}

export default Home;