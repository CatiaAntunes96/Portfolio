import React, {useState, useEffect}  from "react";
import Slider from "./Slider";
import "../Style/Portfolio.css";

import Loader from "react-loader-spinner";

const Portfolio = () => {
    const [display, setDisplay] = useState(false);

    function changeState () {
        setDisplay(true)
    }

    function showCarrousel () {
        setTimeout(changeState, 1200)
    }

    useEffect(() => {
        showCarrousel()
    }, []);

    const loader = <Loader type="Oval" color="#474242" height={200} width={100} />;

    return(
        <div>
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="slider-container">
                {display ? <Slider /> : loader}
            </div>
        </div>
    )
}

export default Portfolio;