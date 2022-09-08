import React, { useEffect, useState } from 'react';
import './Board.css';
import Card from './Card.js'

import apple from '../images/apple.png';
import avocado from'../images/avocado.png';
import banana from '../images/bananas.png';
import dragonFruit from '../images/dragon-fruit.png';
import grape from '../images/grapes.png';
import kiwi from '../images/kiwi.png';
import lemon from '../images/lemon.png';
import mango from '../images/mango.png';
import orange from '../images/orange.png';
import passionFruit from '../images/passion-fruit.png';
import pear from '../images/pear.png';
import pomegranate from '../images/pomegranate.png';
import strawberry from '../images/strawberry.png';
import watermelon from '../images/watermelon.png';
import cherry from '../images/cherry.png';
import peach from '../images/peach.png';

function Board(props) {
    return (
        <div className='board'>
            {props.images.map((image, index) => {
                        return (<Card src={image.src} name={image.name} handleClick={props.handleClick} index={index}/>)
                    })};
        </div>
    )
    
}

export default Board;