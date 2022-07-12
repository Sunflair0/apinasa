import React from 'react';
import { NavbarData } from "./NavbarData";
import { useToggleContext } from "../hooks/useToggleContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { menuMove, handleMenuToggle } = useToggleContext();
  return (
    <>
      <nav className={`menuMove_${menuMove}`}
        onClick={handleMenuToggle}>
        <ul>

        {NavbarData.map((item, index) => {
            return (
        <li section key={index} className={item.hot}>
                <Link to={item.path}>            
               
               <span>{item.icon}</span>
             </Link>
           </li >
             )
            })}
         

          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.style}>  
                <span data_icon={item.icon}></span>                
                <Link to={item.path}>            
               
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
};
export default (Navbar);