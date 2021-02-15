import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Details from './Details';
import Logo from '../../imgs/personagens.png';
import '../../App.css';
import DataPersonagens from '../../DataPersonagens';
import Card from './Card';

function Personagens() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atActive={{ opacity: 1 }}>
      <div className="Section">
        <div className="Personagens">
          <img src={Logo} alt="logo" />
          <p className="Text-med"> 
              São 50 Personagens disponíveis, todos possuem Jutsus próprios de Ataque, Buff e no mínimo 1 Jutsu Especial.
              Os Jutsus Especiais de cada personagem podem ser uma Cura, Invocação, Jutsu de Ataque, Trap, Buff ou outros.
          </p>
            <section>{DataPersonagens.map((data) => <Card key={data.id} data={data} />)}
            <Route exact path="/personagem/:id" component={Details} />  
            </section>
          </div>
        </div>  
      </AnimatedSwitch>
    </Router>
  );
}

export default Personagens;
