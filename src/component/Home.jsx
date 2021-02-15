import React from 'react';
import '../App.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwsSliderStyles from 'react-awesome-slider/src/styles';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  return (
    <div className="Section">
      <div className="Home">

        <div id="Text-Home">
          <h1>Bem Vindo !</h1>
          <br/>
          <p>Aqui você encontrará de tudo e mais um pouco sobre <b> NTO Global</b>.</p>
          <p>Mantenha-se informado, aprenda com as melhores dicas e não perca um evento sequer! </p>
  
          <div id="Slide-Home">
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={4500}
              animation="cubeAnimation"
              className="Slide-box"
              cssModule={AwsSliderStyles}
              >
                <div data-src="../imgs/home/1h.png" />
            </AutoplaySlider>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Home;
