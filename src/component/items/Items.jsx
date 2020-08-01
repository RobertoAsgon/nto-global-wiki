import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataItems from '../../DataItems';
import Card from './Card';
import Logo from '../../imgs/items.png';
import Logo_game from '../../imgs/items_game.png';
import '../../App.css';

function Items() {
  return (
    <Router>
			<div className="Items">
				<img src={Logo} alt="logo" />
				<img id="Img_Items_Game" src={Logo_game} alt="logo" />
				<nav>
					{/* // Headers, Bodies, Legs, Feet, Amulets, Rings, Weapons, Defenses, Bags, Especial */}
					<div>Headers</div> 
					<div>Bodies</div>
					<div>Legs</div>
					<div>Boots</div>
					<div>Amulets</div>
					<div>Rings</div>
					<div>Weapons</div>
					<div>Defenses</div>
					<div>Especiais</div>
				</nav>
				<section>
					{DataItems.map((data) => <Card key={data.id} data={data} />)}
				</section>
				{/* <AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				>
					<Route exact path="/" component={Anbu} />
					<Route path="/items/:id" component={Anbu} />
        		</AnimatedSwitch> */}
      </div>
    </Router>
  );
}

export default Items;
