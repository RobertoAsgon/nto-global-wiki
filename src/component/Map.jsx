import React from 'react';
import '../App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Menu() {
  return (
    <div className="Map">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        animation="cubeAnimation"
        cssModule={AwesomeSliderStyles}
      >
        <div data-src="../imgs/map/1.png" />
        <div data-src="../imgs/map/2.png" />
        <div data-src="../imgs/map/3.png" />
        <div data-src="../imgs/map/4.png" />
        <div data-src="../imgs/map/5.png" />
        <div data-src="../imgs/map/6.png" />
      </AutoplaySlider>
      <img src="../imgs/mapa.png" alt="mapa"/>
      <h1>Baixe agora !</h1>
    </div>
  );
}

export default Menu;
