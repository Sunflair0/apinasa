import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
<div className="main-menu">
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} /></Link>
            
            <nav className={sidebar ? 'main-menu-active' : 'main-menu'}>
                <ul className="main-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link></li>
                </ul>
            </nav>
<div className="menu1"></div>
</div>
        </>
    )
}
