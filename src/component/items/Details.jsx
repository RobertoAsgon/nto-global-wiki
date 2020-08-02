import React from 'react';
import '../../App.css';

function Details(data) {
  console.log('Data: ', data.location.state)
  const { name, level, description, atribute } = data.location.state.data;
  const dir = `/imgs/item_details/${data.location.state.data.imageDetail}.png`
  return (
    <div className="Item-Details">
      <section>
        <div>
          <h1>{name}</h1>
          <br />
          <p>{atribute}</p>
          <br />
          <div id="Text-Details">
            <b>{`Level : ${level} +`}</b>
            <p>{description}</p>
          </div>
        </div>
        <img src={dir} alt="eae"/>
      </section>
    </div>
  );
}
 
export default Details;
