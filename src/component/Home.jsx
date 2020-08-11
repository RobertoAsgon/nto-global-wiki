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
      <div className="slide-home">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4500}
          animation="cubeAnimation"
          className="Slide-box"
          cssModule={AwsSliderStyles}
        >
          <div data-src="../imgs/map/1.png" />
          <div data-src="../imgs/map/2.png" />
          <div data-src="../imgs/map/3.png" />
          <div data-src="../imgs/map/4.png" />
          <div data-src="../imgs/map/5.png" />
          <div data-src="../imgs/map/6.png" />
      </AutoplaySlider>
      </div>
      <div className="Home">
      <div id="Text-Home">
        <h1>Bem Vindo !</h1>
        <br/>
        <p>Aqui você encontrará tudo e mais um pouco <br/> sobre o <b> NTO Global</b>. Fique por dentro de todas as novidades, descubra todos os segredos e não perca um evento sequer! </p>
        <img src={dir} alt="homeraikage"/>
      </div>
			<div id="Facebook">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/globalnto/"
          data-tabs="timeline"
          data-width="500" data-height="600"data-small-header="false"
          data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/globalnto/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/globalnto/">NTO Global</a></blockquote>
        </div>
      </div>
        <div id="Face-Comments" class="fb-comments" data-href="https://ntoglobal.com.br" data-numposts="5" data-width="100%" data-colorscheme="dark"></div>
      </div>
    </>
  );
}

export default Home;
