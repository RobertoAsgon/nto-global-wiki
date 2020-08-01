import React from 'react';

function Details(data) {
  console.log('Data: ', data.location.state)
  const { name, linkVideo } = data.location.state;
  console.log('Data desestruturada', name);


  return (
    <div className="Text">
      <h1>{name}</h1>
      <p>{linkVideo}</p>
    </div>
  );
}

export default Details;
