import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <div className="content_flexbox">
        <div>MyPage</div>
        <Link to='album'>Album</Link>
      </div>
      <Outlet />
    </>
  )
}
export default MyPage;
