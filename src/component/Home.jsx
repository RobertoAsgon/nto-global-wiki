import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  const dir = `/imgs/HomeRaikage.png`

  return (
    <>
      <div className="Home">
        <h1>Home</h1>
        <div id="Face-Comments" class="fb-comments" data-href="https://ntoglobal.com.br" data-numposts="5" data-width="100%" data-colorscheme="dark"></div>
      </div>
    </>
  );
}

export default Home;
