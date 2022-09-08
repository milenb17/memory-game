import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Score from './components/Score';

import apple from './images/apple.png';
import avocado from'./images/avocado.png';
import banana from './images/bananas.png';
import dragonFruit from './images/dragon-fruit.png';
import grape from './images/grapes.png';
import kiwi from './images/kiwi.png';
import lemon from './images/lemon.png';
import mango from './images/mango.png';
import orange from './images/orange.png';
import passionFruit from './images/passion-fruit.png';
import pear from './images/pear.png';
import pomegranate from './images/pomegranate.png';
import strawberry from './images/strawberry.png';
import watermelon from './images/watermelon.png';
import cherry from './images/cherry.png';
import peach from './images/peach.png';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffle = function(arr) {
    return (arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value))
  }
  const initImages = [{src: apple, name: 'Apple', clicked: false}, {src: avocado, name: 'Avocado', clicked: false}, {src: banana, name: 'Banana', clicked: false}, {src: dragonFruit, name: 'Dragonfruit', clicked: false}, {src: grape, name: 'Grape', clicked: false}, {src: kiwi, name: 'Kiwi', clicked: false}, {src: lemon, name: 'Lemon', clicked: false}, {src: mango, name: 'Mango', clicked: false}, {src: orange, name: 'Orange', clicked: false}, {src: passionFruit, name: 'Passionfruit', clicked: false}, {src: pear, name: 'Pear', clicked: false}, {src: pomegranate, name: 'Pomegranate', clicked: false}, {src: strawberry, name: 'Strawberry', clicked: false}, {src: watermelon, name: 'Watermelon', clicked: false}, {src: peach, name: 'Peach', clicked: false}, {src: cherry, name: 'Cherry', clicked: false}];
  const [images, setImages] = useState(shuffle(initImages));
                                
  const handleClick = function(e) {
    let index = Array.from(e.currentTarget.classList)[1];
    console.log(images[index])
    if (images[index].clicked === true) {
        alert("Sorry, you clicked that one before. Game Over");
        setImages(shuffle(initImages));
        setScore(0);
    }
    else {
        let newScore = score +1;
        if (newScore === 16) {
          alert("You Win!");
          setImages(shuffle(initImages));
          setScore(0);
        }
        if (newScore > highScore) {
          setHighScore(newScore);
        }
        setScore(newScore);   
        setImages(images => {
            let newImages = [...images];
            newImages[index] = {...newImages[index], clicked: true};
            return (shuffle(newImages));
        })
    } 
  }
  return (
    <div className="App">
      <div>
        <h1>Memory Game!</h1>
        <p><em>Instructions: </em>Get a point for clicking on an image, but don't click the same image twice!</p>
      </div> 
      <Score score={score} highScore={highScore}/>
      <Board images={images} handleClick={handleClick}/>
    </div>
  );
}

export default App;
