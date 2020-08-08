import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Link } from 'react-router-dom';
import Anbu from './Anbu';
import Akatsuki from './Akatsuki';
import Otsutsuki from './Otsutsuki';
import Kage from './Kage';
import Logo from '../../imgs/graduacao.png';
import Org from '../../imgs/orgs.png';
import FontAnbu from '../../imgs/org_imgs/font_anbu.png';
import FontAkatsuki from '../../imgs/org_imgs/font_akatsuki.png';
import FontOtsutsuki from '../../imgs/org_imgs/font_otsutsuki.png';
import FontKage from '../../imgs/org_imgs/font_kage.png';
import IconAnbu from '../../imgs/org_imgs/Anbu.png';
import IconAkatsuki from '../../imgs/org_imgs/Akatsuki.png';
import IconOtsutsuki from '../../imgs/org_imgs/Otsutsuki.png';
import IconKage from '../../imgs/org_imgs/Kage.png';

import '../../App.css';

function Missions() {
  return (
    <Router>
      <div className="Missions">
        <p className="Text-med">O NPC Naruto pode ser encontrado em Konoha, ajude-o para conquistar pontos de reputação.</p>
        <img src={Logo} alt="logo" />
        <p className="Text-med"> 
          <br/>
          Genin = 50 Pontos de Reputação,<br/> Chunin = 150 Pontos de Reputação,<br/> Jounin = 300 Pontos de Reputação,<br/> Kage = 500 Pontos de Reputação. <br/>
          <br/>
          Pontos de Reputação também são conquistados em Quests e Eventos. <br/>
          <br/>
          Ao elevar sua classificação ninja, você libera missões e territórios exclusivos, items especiais e inúmeras outras recompensas.
        </p>
        <section>
          <Link to="/missions/anbu">
            <img src={FontAnbu} alt="font anbu" />
            <p className="Text-org">Level 400 + <br/> Classificação : Chunin</p>
            <img id="ImgAnbu" src={IconAnbu} alt="icon anbu"/>
          </Link>
          <Link to="/missions/akatsuki">
            <img src={FontAkatsuki} alt="font anbu" />
            <p className="Text-org">Level 400 + <br/> Classificação : Chunin</p>
            <img id="ImgAkatsuki"src={IconAkatsuki} alt="icon anbu"/>
          </Link>
          <Link to="/missions/otsutsuki">
            <img src={FontOtsutsuki} alt="font anbu" />
            <p className="Text-org">Level 500 + <br/> Classificação : Jounin</p>
            <img id="ImgOtsutsuki"src={IconOtsutsuki} alt="icon anbu"/>
          </Link>
          <Link to="/missions/kage">
            <img src={FontKage} alt="font anbu" />
            <p className="Text-org">Level 600 + <br/> Classificação : Kage</p>
            <img id="ImgKage"src={IconKage} alt="icon anbu"/>
          </Link>
        </section>
        <AnimatedSwitch>
            <Route exact path="/missions/anbu" component={Anbu} />
            <Route exact path="/missions/akatsuki" component={Akatsuki} />
            <Route exact path="/missions/otsutsuki" component={Otsutsuki} />
            <Route exact path="/missions/kage" component={Kage} />
        </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default Missions;
