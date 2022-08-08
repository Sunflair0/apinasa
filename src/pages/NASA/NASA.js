import React from 'react'
import { Link } from 'react-router-dom';

const NASA = () => {
  return (
    <>
      <div className="content_flexbox">
        <div>NASA</div>
        <Link to='apod/'>APOD</Link>
        <Link to='mer'>MER</Link>
        <Link to='earth'>EARTH</Link>
        <Link to='iss'>ISS</Link>
      </div>
    </>
  )
}
export default NASA;
