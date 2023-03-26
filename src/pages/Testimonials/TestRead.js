import React from 'react'
import { Outlet } from 'react-router-dom'


const TestRead = () => {

  return (
    <>
      <div className="content_flexbox">
        <div>Testimonials Read</div>
        <Outlet />
      </div>
    </>
  )
}

export default TestRead