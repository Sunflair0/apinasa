import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";


// import BigCube from "./BigCube";



export default function VentConsole(
) 
{const [sidebar2, setSidebar2] = useState(true)
const showSidebar2 = () => setSidebar2(!sidebar2)
  return (
    <>
      VentConsole page

      <div className="leftMenu topMask"><h1 ><Link to='#' className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar2} />
      </Link></h1>

        <div className="">

          <div className={sidebar2 ? 'main-menu-active ' : 'main-menu '}>


            <ul className="flex2">

            <div className="main-menu-items navbar-toggle ">

            <Link to="#" className="menu-barsx">
            <AiIcons.AiOutlineClose onClick={showSidebar2} />

            </Link>
            </div>
</ul>
          </div>
        </div>
      </div>
    </>
  )
}



// export default function MenuPop() {
//   const [isPop, setIsPop] = useState(false);
// return (
// <>
// <ul className="nav-menu-items">
// return( 
// MenuPop.map((item, index) => {

// <li className="wrapper"><button onClick={() => setIsPop(true)}>
// <div key={index}>
// <Link to={item.path}>
//  {item.img}
// <span>{item.tour}</span> 

// <BigCube open={isPop} onClose ={()=> setIsPop(false)}></BigCube>
// <div className="more">{BigCube()}</div>

// </Link>
// </div>
// </button>
// </li>
// }))
// </ul>

// </>)}


