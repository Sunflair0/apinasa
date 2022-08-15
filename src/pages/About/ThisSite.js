import React from 'react'
import { Link } from 'react-router-dom';

const ThisSite = () => {
  return (
<>
    <div>ThisSite</div>
<Link to='about'>About</Link>
<Link to='addons'>Add Ons</Link>
<Link to='game'>Game</Link>
<Link to='tours'>Tours</Link>
</>
  )
}

export default ThisSite