import React from 'react';

function Anbu() {
  const maintence = `/imgs/item_details/maintence.png`
  return (
    <div className="Text-med-mission">
      <h1>Anbu</h1>
      <p>Tutorial passo a passo !</p>
      <img src={maintence} alt="logo" />
    </div>
  );
}

export default Anbu;
