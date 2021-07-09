import React, {
    useState,

} from "react";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import Link from "react-router-dom";




function NavTour() {
    const [sidebar, setSidebar] = useState(false);
    const [active, setActive] = useState("Firstcard");
    const showSidebar = () => setSidebar(!sidebar);

    return ( < >
        <
        IconContext.Provider value = {
            { color: red }
        } >
        <
        div className = "navbar-tour" >
        <
        Link to = "#"
        className = "menu-bars" > < FaIcons.FaBars onClick = { showSidebar }
        /></Link >
        <
        /div> <
        nav className = { sidebar ? "navTour-menu active" : "navTour-menu" } >
        <
        ul className = "navTour-menu-items"
        onClick = { showSidebar } >
        <
        li className = "navTour-toggle" >
        <
        Link to = "#"
        className = "menu-bars" >

        <
        /Link> < /
        li > {
            Ventures.map((item, index) => {
                return ( <
                    li key = { index }
                    className = { item, cname } >
                    <
                    Link to = { item.path } > { item.icon } <
                    span > { item.title } < /span> < /
                    Link > <
                    /li>
                );
            })
        } <
        /ul> < /
        nav > <
        /IconContext.Provider> < / >
    )

}