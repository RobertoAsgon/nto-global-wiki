import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Details from './Details';
import DataItems from '../../DataItems';
import Card from './Card';
import Logo from '../../imgs/items.png';
import Logo_game from '../../imgs/items_game.png';
import '../../App.css';


function filter(props, setItems) {
  if (props !== 'Todos') {
    const itemsFiltred = DataItems.filter(item => item.type === props);
    console.log('NOVO ARRAY', itemsFiltred)
    setItems(itemsFiltred);
  } else {
    setItems(DataItems);
  }

  // setItems(props);
  console.log('items', props)
};

function Items() {
  const [items, setItems] = useState(DataItems);
  
  return (
  <Router>
    <AnimatedSwitch>
      <div className="Items">
        <img src={Logo} alt="logo" />
          <img id="Img_Items_Game" src={Logo_game} alt="logo" />
        <nav>
          {/* // Headers, Bodies, Legs, Feet, Amulets, Rings, Weapons, Defenses, Bags, Especial */}
          <Link to="/items" onClick={() => filter('Todos', setItems)}>Todos</Link>
          <Link to="/items" onClick={() => filter('Headers', setItems)}>Headers</Link> 
          <Link to="/items" onClick={() => filter('Bodies', setItems)}>Bodies</Link>
          <Link to="/items" onClick={() => filter('Legs', setItems)}>Legs</Link>
          <Link to="/items" onClick={() => filter('Boots', setItems)}>Boots</Link>
          <Link to="/items" onClick={() => filter('Shields', setItems)}>Shields</Link>
          <Link to="/items" onClick={() => filter('Weapons', setItems)}>Weapons</Link>
        </nav>
          <section>
            {items.map((data) => <Card key={data.id} data={data} />)}
          </section>
           <Route path="/items/:id" component={Details} />
      </div>
    </AnimatedSwitch>
  </Router>
);
}

export default Items;
