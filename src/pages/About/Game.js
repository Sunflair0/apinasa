import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
<>
    <div>Game</div>
<Link to='about'>About</Link>
<Link to='addons'>Add Ons</Link>
<Link to='thissite'>This Site</Link>
<Link to='tours'>Tours</Link>
</>
  )
}

export default Game