import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const Purchases = () => {
    return (
        <>
            <div className="content_flexbox">
                <div>Purchases</div>
                <Link to='myitems'>Inventory</Link>
                <Link to='mytrip'>Ticket</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Purchases