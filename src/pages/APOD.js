import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';

export default function Apod() {
  const [showToday, setShowToday] = useState(true);
  const [showChoose, setShowChoose] = useState();
  const [showGimme5, setShowGimme5] = useState();
  const [showRange, setShowRange] = useState();
  const [selection, setSelection] = useState("")
  const options = ["today", "choose", "gimme", "range"];

  return (
    <>
     <div className="content_flexbox">
      <div>hello APOD       
          <div className="apodBox">{options.map(opt => <button className="clear" type="button" key={opt} onClick={e => setSelection(opt)}>{opt}</button>)}
          </div>
          <div className=" apodBox apodSee">
            <Link className='apodButton'
              to="nasa/apod/apodtoday"
              style={{
                backgroundImage: "url(./assets/today.png)"
              }}
              onClick={() => setShowToday(showToday)}>
            </Link>

            <Link className='apodButton'
              to="nasa/apod/apodchoose"
              style={{
                backgroundImage: "url(./assets/choose.png)"
              }}
              onClick={() => setShowChoose(showChoose)}>
            </Link>

            <Link className='apodButton'
              to="nasa/apod/apodgimme"
              style={{
                backgroundImage: "url(./assets/gimme.png)"
              }}
              onClick={() => setShowGimme5(showGimme5)}>
            </Link>

            <Link className='apodButton'
              to="nasa/apod/apodrange"
              style={{
                backgroundImage: "url(./assets/range.png)"
              }}
              onClick={() => setShowRange(showRange)}>
            </Link>
          </div >
        </div>

        <div className="flex3">
          <p>{selection === "today" && <ApodToday />}</p>
          <p>{selection === "choose" && <ApodChoose />}</p>
          <p>{selection === "gimme" && <ApodGimme5 />}</p>
          <p>{selection === "range" && <ApodRange />}</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}