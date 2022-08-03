import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarSubMenu = ({ item }) => {
    const [subNav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subNav)

    return (
        <>
            <NavLink 
                onCLick={item.subNav && showSubnav}>
                <div>{item.title}</div>
                <div>
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>                
            </NavLink>
            {subNav && item.subNav.map((item,index) => {
                return (
                    <ddl to={item.path} key={index}>
                        <div className={item.style}>{item.title}</div>
                    </ddl>
                )
            })}
        </>
    )
}

export default (NavbarSubMenu)
