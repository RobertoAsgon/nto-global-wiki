import React, {useEffect} from 'react';
import '../../App.css';

function Details(data) {
  console.log('Data: ', data.location.state)
  const { name, level, description, atribute } = data.location.state.data;
  const dir = `/imgs/item_details/${data.location.state.data.imageDetail}.png`

  useEffect(() => {
    const element = document.getElementById("Item-Details");
    element.scrollIntoView();
  }, []);

  return (
      <div id="Item-Details" className="Item-Details">
        <section>
          <div>
            <h1>{name}</h1>
            <br />
            <p id ="Here">{atribute}</p>
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
