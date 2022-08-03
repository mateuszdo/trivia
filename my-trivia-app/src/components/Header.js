import React from 'react';

function Header() {
    return (
        
        <div className="header">
            
            <h1 className="trivia">Trivia</h1>
            <h2 className="header-time">30s</h2>
            <div className='score'>
              <h3 className="header-text header-score">score: 0 | #2/10</h3>
              <h3 className="header-text">easy</h3>
            </div>
        </div>
    )
}

export default Header;