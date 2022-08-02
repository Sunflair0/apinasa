import React from 'react'
import Dashboard from "../components/Structure/Dashboard"
import { Outlet } from "react-router-dom";
import MenuAnimate from "../components/Animations/MenuAnimate";

const Layout = () => {
    return (
        <>
            <Dashboard />
            <div className='flex_backing'>
                <MenuAnimate />
            </div>
            <Outlet />
        </>
    )
}
export default Layout