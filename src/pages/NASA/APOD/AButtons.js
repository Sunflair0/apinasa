import React, { useState, } from 'react';
import { Link } from 'react-router-dom';

export default function Apod() {
  const [selection, setSelection] = useState("")

  return ( 
        <div className="apodButtons">
          <Link to="apodtoday">
            <div className='apodButton today'
              style={{
                backgroundImage: "url(../../assets/today.png)"
              }}
              onClick={() => setSelection(selection)} />
          </Link>

          <Link to="apodchoose">
            <div className='apodButton choose'
              style={{
                backgroundImage: "url(../../assets/choose.png)"
              }}
              onClick={() => setSelection(selection)} />
          </Link>

          <Link to="apodgimme5">
            <div className='apodButton gimme'
              style={{
                backgroundImage: "url(../../assets/gimme.png)"
              }}
              onClick={() => setSelection(selection)} />
          </Link>

          <Link to="apodrange">
            <div className='apodButton range'
              style={{
                backgroundImage: "url(../../assets/range.png)"
              }}
              onClick={() => setSelection(selection)} />
          </Link>
        </div >
       );
}