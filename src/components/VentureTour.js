import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import Ventures from "./extension/Data";
import "./Navbar.css";
import {IconContext} from  "react.icons";


function VentureTour() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: red }}>
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
                <li key={index} ><img src={item.icon}/>

                  <Link to={item.path}>
                   
                    <span>{item.title}</span>
                    
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default VentureTour