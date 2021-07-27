import React from "react";
import ReactDom from "react-dom";

const Cube ={
position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
backgroundColor: "darkgrey",
padding: "50px",
zIndex:100
}

const Overlay={
position: 'fixed',
top: 0,
left: 0,
right: 0,
bottom: 0,
backgroundColor: 'rgba(0,0,0,.7)',
zIndex: 100
}


export default function BigCube(open, {id, tour, description, img, price, buyVent, unBuyVent}, onClose){ 
if(!open)return null    

return ReactDom.createPortal(
<>
<div style={Overlay}/>
<div style ={Cube}> 
<div className="bigcube">
<button onClick={onClose}>X</button>

<h4 className="cubetitle">{tour}</h4>
{isBuy &&
<button className="cube" onClick={()=>buyVent(id)}>BUY</button>
}
{!isBuy && (<button className="unBuy" onClick={()=>unBuyVent({id, description, img, price})}>REMOVE</button>
)}
</div></div>
</>,
document.getElementById("portal")
)}

 export default BigCube;
