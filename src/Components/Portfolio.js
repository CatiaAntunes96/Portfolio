import React  from "react";
import Slider from "./Slider";
import "../Style/Portfolio.css";

const Portfolio = () => {

    return(
        <div>
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="slider-container">
            <Slider />
            </div>
        </div>
    )
}

export default Portfolio;