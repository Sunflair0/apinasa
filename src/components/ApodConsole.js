import React, { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';



export default function ApodConsole() {
  const [showToday, setShowToday] = useState(true);
  const [showChoose, setShowChoose] = useState();
  const [showGimme5, setShowGimme5] = useState();
  const [showRange, setShowRange] = useState();
  const [selection, setSelection] = useState("")
  const options = ["today", "choose", "gimme", "range"];

  return (
    <>

      <div className="flex1">
        <div className="">{options.map(opt => <button className="clear" type="button" key={opt} onClick={e => setSelection(opt)}>{opt}</button>)}
        </div>
<div className=" xx">
        <NavLink
          to="#"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/today.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: "1em",
            transition: ".3s ease all",
          }} onClick={() => setShowToday(showToday)}>
        </NavLink>

        <NavLink
          to="#"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/choose.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: "1em",
            transition: ".3s ease all",
          }} onClick={() => setShowChoose(showChoose)}>
        </NavLink>

        <NavLink
          to="#"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/gimme.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: "1em",
            transition: ".3s ease all",
          }} onClick={() => setShowGimme5(showGimme5)}>
        </NavLink>

        <NavLink
          to="#"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/range.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: "1em",
            transition: ".3s ease all",
          }} onClick={() => setShowRange(showRange)}>
        </NavLink>
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


