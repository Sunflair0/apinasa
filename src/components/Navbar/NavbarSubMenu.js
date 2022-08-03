import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavbarSubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <NavLink to={item.path}  className={item.style}
                  data-icon={item.icon}
                style={({ isActive }) => {
                    return { color: isActive ? '#fff000' : '#74a741' };
                }}
                onCLick={item.subNav && showSubnav}>
                <div> <span>{item.title}</span></div>

                <div>
                    {item.subNav && subnav
                        ? item.iconOpen
                        : item.subNav
                            ? item.iconClose
                            : null}
                </div>
            </NavLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <Link to={item.path} key={index}>
                        <div className={item.style}><span>{item.title}</span></div>
                    </Link>
                )
            })}
        </>
    )
}

