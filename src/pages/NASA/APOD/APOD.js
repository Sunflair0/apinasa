import React, { useState, } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Apod() {
  const [selection, setSelection] = useState("")
  // const options = ["today", "choose", "gimme", "range"];

  return (
    <>
      <div className='apodPage'>        
        <div className="apodButtons">
          <NavLink to="apodtoday">
            <div className='apodButton today'
              style={{
                backgroundImage: "url(../../assets/today.png)"
              }}
              onClick={() => setSelection(selection)} />
          </NavLink>

          <NavLink to="apodchoose">
            <div className='apodButton choose'
              style={{
                backgroundImage: "url(../../assets/choose.png)"
              }}
              onClick={() => setSelection(selection)} />
          </NavLink>

          <NavLink to="apodgimme5">
            <div className='apodButton gimme'
              style={{
                backgroundImage: "url(../../assets/gimme.png)"
              }}
              onClick={() => setSelection(selection)} />
          </NavLink>

          <NavLink to="apodrange">
            <div className='apodButton range'
              style={{
                backgroundImage: "url(../../assets/range.png)"
              }}
              onClick={() => setSelection(selection)} />
          </NavLink>

        </div >
  <div className="content_flexbox">     
        <Outlet />
      </div>
 </div >
    </>
  );
}