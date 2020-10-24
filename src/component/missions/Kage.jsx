import React from 'react';

function Kage() {
  const maintence = `/imgs/item_details/maintence.png`
  return (
    <div className="Text-med-mission">
      <h1>Kage</h1>
      <p>Tutorial passo a passo !</p>
      <img src={maintence} alt="logo" />
    </div>
  );
}

export default Kage;
