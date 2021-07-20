import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import Ventures from "./extension/Data";
import "./Navbar.css";



function VentureTour() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
  
        <div className="venture-menu">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "venture-menu active" : "venture-menu"}>
          <ul className="venture-menu-items" onClick={showSidebar}>
            <li className="venture-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            {Ventures.map((item, index) => {
              return (
                <li key={index} ><img alt="right sidebar with planets as index holders" src={item.icon}/>

                  <Link to={item.path}>
                   
                    <span>{item.title}</span>
                    
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
<<<<<<< HEAD
      
=======
   
>>>>>>> master
    </>
  );
}
export default VentureTour