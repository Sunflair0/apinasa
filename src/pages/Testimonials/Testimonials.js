import React from 'react'
import { Link } from 'react-router-dom'


const Testimonials = () => {
  return (
    <div className="content_flexbox">
      <div>Salutes</div>
      <Link to="read">Test Read</Link>
      <Link to="write">Test Write</Link>
    </div>
  )
}
export default Testimonials