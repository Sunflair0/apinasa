import React, { useState, } from 'react';
import { NavLink } from 'react-router-dom';

export default function Apod() {
  const [selection, setSelection] = useState("")

  return (
    <div className="apodButtons">
      <NavLink
        style={({ isActive }) => {
 return isActive ? { outline: "#4b4be9 2px solid", outlineOffset: '8px' } : {} }}
        to="apodtoday">
        <div className='apodButton today'
          style={{
            backgroundImage: "url(../../assets/today.png)"
          }}
          onClick={() => setSelection(selection)} />
      </NavLink>

      <NavLink
        style={({ isActive }) => { return isActive ? { outline: "#4b4be9 2px solid", outlineOffset: '8px' } : {}}}

        to="apodchoose">
        <div className='apodButton choose'
          style={{
            backgroundImage: "url(../../assets/choose.png)"
          }}
          onClick={() => setSelection(selection)} />
      </NavLink>

      <NavLink
        style={({ isActive }) => { return isActive ? { outline: "#4b4be9 2px solid", outlineOffset: '8px' } : {}}}

        to="apodgimme5">
        <div className='apodButton gimme'
          style={{
            backgroundImage: "url(../../assets/gimme.png)"
          }}
          onClick={() => setSelection(selection)} />
      </NavLink>

      <NavLink
        style={({ isActive }) => { return isActive ? { outline: "#4b4be9 2px solid", outlineOffset: '8px' } : {}}}

        to="apodrange">
        <div className='apodButton range'
          style={{
            backgroundImage: "url(../../assets/range.png)"
          }}
          onClick={() => setSelection(selection)} />
      </NavLink>
    </div >
  );
}