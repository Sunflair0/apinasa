import React from 'react'
import Dashboard from "../components/Dashboard"
import { Outlet } from "react-router-dom";
import MenuAnimate from "../components/MenuAnimate";

const PagesTemplate = () => {
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
export default PagesTemplate