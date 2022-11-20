import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

export default function VentConsole(
) 
{const [sidebar2, setSidebar2] = useState(true)
const showSidebar2 = () => setSidebar2(!sidebar2)
  return (
    <>
      VentConsole page

      <div className="leftMenu"><h1 ><Link to='#' className="menu-bars">
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