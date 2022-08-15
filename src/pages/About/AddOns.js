import React from 'react'
import { Link } from 'react-router-dom';

const AddOns = () => {
  return (
<>
    <div>AddOns</div>
<Link to='about'>About</Link>
<Link to='game'>Game</Link>
<Link to='thissite'>This Site</Link>
<Link to='tours'>Tours</Link>
</>
  )
}

export default AddOns