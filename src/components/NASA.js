import React from 'react'
import { Link } from 'react-router-dom';

const NASA = () => {
  return (
    <>
    <div>NASA</div>
    <Link to='/apod'>APOD</Link>
    <Link to='/mer'>MER</Link>
    <Link to='/earth'>EARTH</Link>
    </>
  )
}
export default NASA;
