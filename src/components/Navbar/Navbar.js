import { NavbarData } from "./NavbarData";
import { NavbarSubMenu } from './NavbarSubMenu';

const Navbar = () => {

  return (
    <>
      <nav>
        <ul>
          {NavbarData.map((item, index) => {
            return (
              <li>
                <NavbarSubMenu item={item} key={index} />
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
};
export default (Navbar);