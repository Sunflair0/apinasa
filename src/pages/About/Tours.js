import React from 'react'
import { Link } from 'react-router-dom';

const Tours = () => {
  return (
<>
    <div>Tours</div>
<Link to='about'>About</Link>
<Link to='addons'>Add Ons</Link>
<Link to='game'>Game</Link>
<Link to='thissite'>This Site</Link>
</>
  )
}

export default Tours