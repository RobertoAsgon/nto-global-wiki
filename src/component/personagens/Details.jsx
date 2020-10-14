import React, {useEffect} from 'react';

function Details(data) {
  console.log('Data: ', data.location.state)
  const { name, linkVideo } = data.location.state;
  console.log('Data desestruturada', name);

  useEffect(() => {
    const element = document.getElementById("Item-Details");
    element.scrollIntoView();
  }, [data.location.state]);

  return (
    <div id="Item-Details" className="Item-Details">
      <h1>{name}</h1>
      <p>{linkVideo}</p>
    </div>
  );
}

export default Details;
