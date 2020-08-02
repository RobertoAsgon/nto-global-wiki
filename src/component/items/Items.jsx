import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Details from './Details';
import DataItems from '../../DataItems';
import Card from './Card';
import Logo from '../../imgs/items.png';
import Logo_game from '../../imgs/items_game.png';
import '../../App.css';

function Items() {
  return (
  <Router>
    <AnimatedSwitch>
      <div className="Items">
        <img src={Logo} alt="logo" />
        <img id="Img_Items_Game" src={Logo_game} alt="logo" />
        <nav>
          {/* // Headers, Bodies, Legs, Feet, Amulets, Rings, Weapons, Defenses, Bags, Especial */}
          <div>Todos</div>
          <div>Headers</div> 
          <div>Bodies</div>
          <div>Legs</div>
          <div>Boots</div>
          <div>Shields</div>
          <div>Amulets</div>
          <div>Rings</div>
          <div>Weapons</div>
        </nav>
        <Route path="/items/:id" component={Details} />
        <section>
          {DataItems.map((data) => <Card key={data.id} data={data} />)}
        </section>
      </div>
    </AnimatedSwitch>
  </Router>
);
}

export default Items;
