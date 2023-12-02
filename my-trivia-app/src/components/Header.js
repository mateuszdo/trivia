import React from 'react';

function Header(props) {
    
    return (
        
        <div className="header">
            <h1 className="trivia">Trivia</h1>
            <h2 className="header-time">{props.counter}</h2>
            <div className='score'>
    <h3 className="header-text header-score">score: {props.score} | #{props.nextButtonClicked.value}</h3>
              <h3 className="header-text">easy</h3>
            </div>
        </div>
    )
}

export default Header;