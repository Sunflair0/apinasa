import React from 'react';
import { NavbarData } from "./NavbarData";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.style}

                 data-icon={item.icon}
>

                <NavLink to={item.path} style={({ isActive }) => {
                  return { color: isActive ? '#fff000' : '' };
                }} >

                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
};
export default (Navbar);
