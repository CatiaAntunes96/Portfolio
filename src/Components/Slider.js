import React from "react";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Heroes from "../Images/heroes_app.png";
import Quote from "../Images/random_quote.PNG";
import Calculator from "../Images/calculator.png";
import Color from "../Images/color_game.png";
import Drum from "../Images/drum_machine.png";
import Markdown from "../Images/markdown.png";
import Pomodoro from "../Images/pomodoro_clock.png";

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
};

`;
const CarouselUI = ({ position, total, handleClick, children }) => (
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
    const Carousel = makeCarousel(CarouselUI);
    
    const Slider = () => {
      return(
        <Carousel defaultWait={2500}>
        <Slide right>
        <div>
        <a href="https://codesandbox.io/s/heores-app-1ei22?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">
        <img src={Heroes} className="slider-image" alt="Heroes App"></img>
        </a>
        
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codesandbox.io/s/random-quote-generator-n3mzj?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">
        <img src={Quote} className="slider-image" alt="Random-Quote Machine"></img>
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codepen.io/c-tia-antunes/full/BayVPge" target="_blank">
        <img src={Calculator} className="slider-image" alt="Calculator App"></img>
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codepen.io/c-tia-antunes/full/PowoeOz" target="_blank">
        <img src={Color} className="slider-image" alt="Color Game App"></img>
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codesandbox.io/s/drum-machine-luluj?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">
        <img src={Drum} className="slider-image" alt="Drum Machine"></img>
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codesandbox.io/s/mardown-previewer-kdq9e?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">
        <img src={Markdown} className="slider-image" alt="Markdown Preview"></img>
        </a>
        </div>
        </Slide>
        <Slide right>
        <div>
        <a href="https://codesandbox.io/s/pomodoro-clock-app-o0si8?fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">
        <img src={Pomodoro} className="slider-image" alt="Pomodoro Clock"></img>
        </a>
        </div>
        </Slide>
        </Carousel>
        )
      }
      
      export default Slider;