import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Menu from './component/Menu.jsx';
import Items from './component/items/Items';
import Personagens from './component/personagens/Personagens';
import Missions from './component/missions/Missions';
import Map from './component/Map.jsx';
import Tips from './component/Tips.jsx';
import Youtube from './component/Youtube.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="Section"
          >
            <Route exact path="/personagens" component={Personagens} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/missions" component={Missions} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/tips" component={Tips} />
            <Route exact path="/youtube" component={Youtube} />
          </AnimatedSwitch>
      </div>
    </BrowserRouter>
  );
}

export default App;
