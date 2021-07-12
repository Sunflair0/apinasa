import React, { useState, useContext } from "react";
import VentConsole2 from "./VentConsole2";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import {clearForm} from "../form";

function VentureTour() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [ventureInfo2, setVentureInfo2] =useContext;

  return (
  
    <div className="displayvent">
   
      
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
                <li key={index} >
                  <Link to={item.path}>
                   <img src={item.icon}/>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
         
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TourInfo);
