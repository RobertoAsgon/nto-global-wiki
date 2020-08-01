import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const { data } = props;
  const { id, name, linkVideo } = data;
  return (
    <Link to={{ pathname: `/personagem/${id}`, state: { name, linkVideo } }}>
      <img  src={props.data.imagePath} alt={props.data.imagePath} />
    </Link>
  );
}

export default Card;
