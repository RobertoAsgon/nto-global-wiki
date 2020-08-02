import React from 'react';


function Home() {
  const dir = `/imgs/HomeRaikage.png`

	return (
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
  );
}

export default Home;
