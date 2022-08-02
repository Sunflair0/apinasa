import { NavLink } from 'react-router-dom';
import { NavbarData } from "./NavbarData";
import "../../styles/css/navbar.min.css";


const Navbar = () => {

  return (
    <>
      <nav>
        <ul>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.style}
                data-icon={item.icon}>
                <NavLink to={item.path} style={({ isActive }) => {
                  return { color: isActive ? '#fff000' : '#74a741' };
                }} >
                <div> <span>{item.title}</span></div>               
               
                  
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
