import React, {useState} from "react";
import VentConsole2 from "./VentConsole";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
// import { clearForm } from "../form";
function TourInfo() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (

 
    <>
<div className=" content banner">Tour Info Page</div>
      <div className="displayvent">
        <VentConsole2 />
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
          </ul>
        </nav>
      </div>
    </>
  );
}
export default TourInfo;
