import React  from "react";
import "../Style/Home.css";
import Avatar from "../myAvatar.png";


const Home = () => {

    return(
       <div>
        <div className="home-container">
            <div className="home-title">
                <h1 className="title-presentation color-title">Cátia</h1>
                <h1 className="title-presentation subtitle">Front-End Developer</h1>
           </div>
           <img src={Avatar} alt="avatar" className="home-img"></img>
       </div>
       <div className="image-background">
       </div>
       </div>
    )
}

export default Home;