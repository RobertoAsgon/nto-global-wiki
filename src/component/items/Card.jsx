import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    const { data } = props;
    console.log('oqe', data);

    return (
        <Link to={{ pathname: `/items/${data.idgame}`, state: { data } }}>
            <img  src={data.imagePath} alt={data.idgame} />
        </Link>
    );
}

export default Card;
