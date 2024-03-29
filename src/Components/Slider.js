import React from "react";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Heroes from "../Images/heroes_app.png";
import Quote from "../Images/randomQuote.png";
import Calculator from "../Images/calculator.png";
import Color from "../Images/color_game.png";
import Drum from "../Images/drum_machine.png";
import Markdown from "../Images/markdown.png";
import Pomodoro from "../Images/pomodoro.png";
import Weather from "../Images/weather_app.png";

const width = '700px', height='350px';
const Container = styled.div`
border-radius: 3px;
position: relative;
overflow: hidden;
width: ${width};
@media screen and (min-width: 300px) and (max-width: 500px) {
  width: 315px;
};
@media screen and (min-width: 600px) and (max-width: 790px) {
  width: 550px;
}
`;
const Children  = styled.div`
width: ${width};
position: relative;
height: ${height};
@media screen and (min-width: 300px) and (max-width: 500px) {
  width: 315px;
  height: 235px;
};
@media screen and (min-width: 600px) and (max-width: 790px) {
  width: 550px;
  height: 300px;
}
`;
const Arrow = styled.div`
background-color: #ffffff82;
z-index: 100;
line-height: 351px;
text-align: center;
position: absolute;
top: 0;
width: 10%;
font-size: 3em;
color: #08657787;
user-select: none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
@media screen and (min-width: 300px) and (max-width: 500px) {
  line-height: 236px;
}
@media screen and (min-width: 600px) and (max-width: 790px) {
  line-heigth: 301px;
}
`;
const Dot = styled.span`
font-size: 1.3em;
cursor: pointer;
text-shadow: 1px 1px 1px #fff;
user-select: none;
color: #086577;
`;
const Dots = styled.span`
text-align: center;
width: ${width};
z-index: 100;
display: flex;
justify-content: center;
@media screen and (min-width: 300px) and (max-width: 790px) {
  display: none;
};`;

const CarouselUI = ({ position, total, handleClick, children }) => {

  return(
  <Container>
  <Children>
  {children}
  <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
  <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Children>
  <Dots>
  {Array(...Array(total)).map( (val, index) =>
    <Dot key={index} onClick={handleClick} data-position={index}>
    {index === position ? '● ' : '○ ' }
    </Dot>
    )}
    </Dots>
    </Container>
    );
  }
const Carousel = makeCarousel(CarouselUI);
    
    const Slider = () => {
      return(
        <Carousel defaultWait={7000}>
        {/*<Slide right>
          <div>
        <a href="https://heroes-library.netlify.com/" target="_blank" rel="noopener noreferrer">
        <img src={Heroes} alt="Heroes App" className="slider-image" />
        </a>
        </div>
        </Slide> */}
        <Slide right>
        <div>
          <a href="https://ca-weather-app.netlify.com/" target="_blank" rel="noopener noreferrer">
            <img src={Weather} alt="Weather App" className="slider-image" />
          </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://randomquote-lotr.netlify.com/" target="_blank" rel="noopener noreferrer">
        <img src={Quote} alt="Random-Quote Machine" className="slider-image" />
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codepen.io/c-tia-antunes/full/BayVPge" target="_blank" rel="noopener noreferrer">
          <img src={Calculator} alt="Calculator App" className="slider-image" />
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://color-game-app.netlify.com/?_ga=2.199128230.801667734.1585840778-215967017.1585072614" target="_blank" rel="noopener noreferrer">
          <img src={Color} alt="Color Game App" className="slider-image" />
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://drumapp.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={Drum} alt="Drum Machine" className="slider-image" />
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://mkdn-previewer.netlify.com" target="_blank" rel="noopener noreferrer">
        <img src={Markdown} alt="Markdown Previewer" className="slider-image" />
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://pomodoro-clck.netlify.com/" target="_blank" rel="noopener noreferrer">
        <img src={Pomodoro} alt="Pomodoro Clock" className="slider-image" />
        </a>
        </div>
        </Slide>
        </Carousel>
        )
      }
      
      export default Slider;
