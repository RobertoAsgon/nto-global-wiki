import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgs/logo.png';
import '../App.css';

function Menu() {
  return (
  <div className="Menu">
      <img src={Logo} alt="logo" />
      <nav>
        {/* <div onClick="window.location.reload();"><a href="http://ntoglobal.com.br/wiki">Inicio</a></div> */}
        <div><Link to="/wiki">Inicio</Link></div>
        <div><Link to="/personagens">Personagens</Link></div>
        <div><Link to="/items">Items</Link></div>
        <div><Link to="/missions">Missões</Link></div>
        <div><Link to="/map">Mapa</Link></div>
        <div><Link to="/youtube">Youtube</Link></div>
        <div><a href="//www.ntoglobal.com.br">Voltar</a></div>
      </nav>
  </div>
  );
}

export default Menu;
