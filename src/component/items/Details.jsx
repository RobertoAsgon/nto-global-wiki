import React from 'react';
import '../../App.css';

function Details(data) {
  console.log('Data: ', data.location.state)
  const { name, level, description, atribute } = data.location.state.data;
  const dir = `/imgs/item_details/${data.location.state.data.imageDetail}.png`
  return (
    <div className="Item-Details">
      <div id="Title-Details"><h2>{name}</h2> <p>{atribute}</p></div>
      <section>
        <div id="Text-Details">
          <h1>{`Level : ${level} +`}</h1>
          <p>{description}</p>
        </div>
        <img src={dir} alt="eae"/>
      </section>
    </div>
  );
}
 
export default Details;
