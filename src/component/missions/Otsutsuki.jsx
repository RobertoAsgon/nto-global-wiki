import React from 'react';

function Otsutsuki() {
  const maintence = `/imgs/item_details/maintence.png`
  return (
    <div className="Text-med-mission">
      <h1>Otsutsuki</h1>
      <p>Tutorial passo a passo !</p>
      <img src={maintence} alt="logo" />
    </div>
  );
}

export default Otsutsuki;
