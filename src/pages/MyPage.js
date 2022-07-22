import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <div className="content_flexbox">
        <div>MyPage</div>
        <Link to='album'>Album</Link>
        <Link to='ipn'>IPN</Link>
        <Link to='dailyreward'>Bank</Link>       
        <Link to='purchases'>Purchases</Link>
        <Link to='mysalutes'>My Salutes</Link>
        <Link to='travelnow'>Travel Now</Link>
        <Link to='presentlocation'>Present Location</Link>
      </div>
      <Outlet />
    </>
  )
}
export default MyPage;
