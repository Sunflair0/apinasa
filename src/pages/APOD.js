import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="">
        <div className="apodBox">{options.map(opt => <button className="clear" type="button" key={opt} onClick={e => setSelection(opt)}>{opt}</button>)}
        </div>
<div className=" apodBox apodSee">
        <Link to="/apodtoday"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/today.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

          
          }} onClick={() => setShowToday(showToday)}>
        </Link>

        <Link 
          to="apodchoose"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/choose.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
         
          }} onClick={() => setShowChoose(showChoose)}>
        </Link>

        <Link 
          to="apodgimme"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/gimme.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
         
          }} onClick={() => setShowGimme5(showGimme5)}>
        </Link>

        <Link 
          to="apodrange"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/range.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        
          }} onClick={() => setShowRange(showRange)}>
        </Link>
      </div >
</div>

      <div className="flex3">
        <p>{selection === "today" && <ApodToday />}</p>
        <p>{selection === "choose" && <ApodChoose />}</p>
        <p>{selection === "gimme" && <ApodGimme5 />}</p>
        <p>{selection === "range" && <ApodRange />}</p>
      </div>
    </>
  );
}