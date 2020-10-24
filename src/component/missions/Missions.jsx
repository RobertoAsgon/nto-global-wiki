import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Link } from 'react-router-dom';
import Anbu from './Anbu';
import Akatsuki from './Akatsuki';
import Otsutsuki from './Otsutsuki';
import Kage from './Kage';
import Logo from '../../imgs/graduacao.png';
import Leveleskill from '../../imgs/leveleskill.png';
import FontAnbu from '../../imgs/org_imgs/font_anbu.png';
import FontAkatsuki from '../../imgs/org_imgs/font_akatsuki.png';
import FontOtsutsuki from '../../imgs/org_imgs/font_otsutsuki.png';
import FontKage from '../../imgs/org_imgs/font_kage.png';
import IconAnbu from '../../imgs/org_imgs/Anbu.png';
import IconAkatsuki from '../../imgs/org_imgs/Akatsuki.png';
import IconOtsutsuki from '../../imgs/org_imgs/Otsutsuki.png';
import IconKage from '../../imgs/org_imgs/Kage.png';

import '../../App.css';

// Genin = 50 Pontos de Reputação,
// Chunin = 150 Pontos de Reputação,
// Jounin = 300 Pontos de Reputação,
// Kage = 500 Pontos de Reputação.

// Pontos de Reputação também são conquistados em Quests e Eventos.

// Ao elevar sua classificação ninja, você libera missões e territórios exclusivos, items especiais e inúmeras outras recompensas.

function Missions() {

  return (
    <Router>
      <div className="Section">
        <div className="Missions">
          <div className="Text-med-missions"> 
            <h2>Level & Skill</h2>
            <img src={Leveleskill} alt="logo" />
            <p>Para aqueles que desejam aprimorar sua resistencia e causar maior dano, será necessário muito treino além de experiência.</p>
            <br />
            <p>As principais formas de se adquirir experiência:</p>
            <br />
            <p>Realizando missões.</p>
            <p>Derrotando criaturas em Hunt's.</p>
            <p>Encontrando Kekkeis Generators.</p>
            <p>☠️ Pklizando.</p>
            <br />
            <h2>Missões & Quests</h2>
            <img src={Logo} alt="logo" />
            <p>Ajude o Naruto, ou qualquer outro NPC, faça novas Quests, isso fará com que você acumule pontos de reputação. "!rep"</p>
            <br />
            <br />
            <p>Para aumentar o nível da sua classificação ninja, você deve atingir uma certa quantidade de pontos.</p>
            <br />
            <p>Genin = 50 Pontos de Reputação.</p>
            <p>Chunin = 150 Pontos de Reputação.</p>
            <p>Jounin = 300 Pontos de Reputação.</p>
            <p>Kage = 1000 Pontos de Reputação.</p>
            <br />
            <p>A sua classe é o que determinará se você tem ou não, permissão, para acessar certos locais do mapa.</p>
          </div>
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
              <p className="Text-org">Level 600 + <br /> Classificação : Kage</p>
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
      </div>  
    </Router>
  );
}

export default Missions;
