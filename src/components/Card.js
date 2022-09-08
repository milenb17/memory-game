import React, { useEffect, useState } from 'react';

function Card(props) {
    return (
        <div className={`card ${props.index}`} onClick={props.handleClick}>
            <img src={props.src} alt={props.name}></img>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;