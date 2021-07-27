import React, {useState} from "react";
import { Link } from "react-router-dom";
import BigCube from "./BigCube";


const wrapper ={
position: 'relative',
zIndex: 1
}

const more ={
position: 'relative',
zIndex: 2,
backgroundColor: 'red',
padding: "10px"
}



export default function MenuPop() {
  const [isPop, setIsPop] = useState(false);
return (
<>
<ul className="nav-menu-items">
return( 
MenuPop.map((item, index) => {

<li className="wrapper"><button onClick={() => setIsPop(true)}>
<div key={index}>
<Link to={item.path}>
 {item.img}
<span>{item.tour}</span> 

<BigCube open={isPop} onClose ={()=> setIsPop(false)}></BigCube>
<div className="more">{BigCube()}</div>

</Link>
</div>
</button>
</li>
}))
</ul>

</>)}


export default MenuPop;
