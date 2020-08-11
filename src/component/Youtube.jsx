import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgs/logo.png';
import '../App.css';

function Menu() {

  return (
    <div className="Youtube">
      <div className="Text-med">
        <h1>Torne-se um YouTuber !</h1>
        <p>
          <br/>
          Crie um canal agora, comece a gravar vídeos sobre
          o NTO Global e divirta-se com as recompensas !
          <br/>
          <br/>
          Possuímos 3 Kit's recheados com items valiosos que lhe
          auxiliarão em sua Jornada Shinobi.<br/>
          <br/>
          Para ganhar é fácil, basta produzir conteúdo no YouTube
          e entrar em contato com a administração dentro do jogo !<br/>
        </p>
      </div>
      <img src="./imgs/youtube.png" alt="" />
    </div>
  );
}

export default Menu;
