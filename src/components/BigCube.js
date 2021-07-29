import React, {useState, forwardRef, useImperativeHandle} from "react";
import { ReactDOM } from "react-dom";
import { getElementById } from "domutils";

const BigCube = forwardRef((props,ref)=> {
const [display, setDisplay]=useState(false);

useImperativeHandle(ref,() => {
return {

openCube: () => open(),
close: ()=> close()
}
} );

const open = () => {
setDisplay(true)
};

const close =() => {
setDisplay(false);
};


if(display) {
return ReactDOM.createPortal(
<div className={"cube-wrapper"}>
<div className={"cube-backdrop"}/>
<div className ={"cube"}>
{props.children}</div>
</div>,
document.getElementById("cube-root"))
}
return null
 
});







// export default function MenuPop() {
//   const [isPop, setIsPop] = useState(false);
// return (
// <>
// <ul className="nav-menu-items">


// const item = 
// return( 
// MenuPop.map((item, index) => {

// <li className="wrapper"><button onClick={() => setIsPop(true)}>
// <div key={index}>
// <Link to={item.path}>
//  {item.img}
// <span>{item.tour}</span> 

/*{ <BigCube open={isPop} onClose ={()=> setIsPop(false)}></BigCube>
<div className="more">{BigCube()}</div>

</Link>
</div>
</button>
</li>
}))
</ul>

</>)} }*/

export default BigCube;
