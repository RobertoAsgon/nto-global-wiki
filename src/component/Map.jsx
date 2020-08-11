import React from 'react';
import '../App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwsSliderStyles from 'react-awesome-slider/src/styles';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function Menu() {
  return (
    <div className="Map">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4500}
        animation="cubeAnimation"
        cssModule={AwsSliderStyles}
      >
        <div data-src="../imgs/map/1.png" />
        <div data-src="../imgs/map/2.png" />
        <div data-src="../imgs/map/3.png" />
        <div data-src="../imgs/map/4.png" />
        <div data-src="../imgs/map/5.png" />
        <div data-src="../imgs/map/6.png" />
      </AutoplaySlider>
      <article className="Text-med">
        <p>Baixe o mapa completo em seu computador !</p>
      </article>
      <img src="../imgs/download.png" alt="mapa"/>
    </div>
  );
}

export default Menu;
