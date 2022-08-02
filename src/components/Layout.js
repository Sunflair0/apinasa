import React from 'react'
import Dashboard from "./Dashboard"
import { Outlet } from "react-router-dom";
import MenuAnimate from "./MenuAnimate";

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