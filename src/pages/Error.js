import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h3>404</h3>
    <p>Page not found.</p>
    <Link to='/'>Back Home</Link>
    </>
  )
}

export default Error;