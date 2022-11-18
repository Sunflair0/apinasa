import { NavbarData } from "./NavbarData";
import { NavbarSubMenu } from './NavbarSubMenu';

const Navbar = () => {

  return (
    <>
      <nav>
        {NavbarData.map((item, index) => {
          return (
            <NavbarSubMenu item={item} key={index} />
          )
        })}
      </nav>
    </>
  );
};
export default (Navbar);