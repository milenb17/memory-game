import React, { useEffect, useState } from 'react';

function Score(props) {
    return (
        <div>
            Score: {props.score} || High Score: {props.highScore} 
        </div>
    )
}

export default Score;