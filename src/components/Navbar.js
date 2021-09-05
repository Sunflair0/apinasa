import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>

             <div className="main-menu-items navbar-toggle ">

                      <Link to="#" className="menu-barsx">
                        <AiIcons.AiOutlineClose  />
                      </Link>
                    </div>


        </>
    )
}
