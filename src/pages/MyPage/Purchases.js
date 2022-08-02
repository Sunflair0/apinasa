import React from 'react'
import { Link } from 'react-router-dom';


const Purchases = () => {
    return (
        <>
            <div className="content_flexbox">
                <div>Purchases</div>
                <Link to='myitems'>Inventory</Link>
                <Link to='mytrip'>Ticket</Link>

                <Link to=':tourId'>TOURS</Link>
            </div>
            
        </>
    )
}

export default Purchases