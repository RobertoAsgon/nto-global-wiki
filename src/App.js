import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './component/Menu.jsx';
import Items from './component/items/Items';
import Personagens from './component/personagens/Personagens';
import Missions from './component/missions/Missions';
import Map from './component/Map.jsx';
import Youtube from './component/Youtube.jsx';
import Home from './component/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Route exact path="/home" component={Home} />
        <Route exact path="/personagens" component={Personagens} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/objetivo" component={Missions} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/youtube" component={Youtube} />
      </div>
    </BrowserRouter>
  );
}

export default App;
