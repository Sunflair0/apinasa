import React, { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';



export default function ApodConsole() {
const [showToday, setShowToday] = useState(true);
const [showChoose, setShowChoose] =useState();
const [showGimme5, setShowGimme5] =useState();
const [showRange, setShowRange] =useState();



const options =["aToday","aChoose","aGimme","aRange"];
const [selection, setSelection]=useState("")
const onClick = () => setShowToday(true);

	return (
	 <>
      <div className="banner">
        <NavLink
          to="#"
 onClick={() => setShowToday(showToday)}
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/today.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginRight: "5em",
            transition: ".3s ease all",
          }}
        >
        </NavLink>

        <NavLink
          to="#"
 onClick={() => setShowChoose(showChoose)}
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/choose.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginRight: "5em",
            transition: ".3s ease all",
          }}
        >
        </NavLink>

        <button
          to="#"
onClick={() => setShowGimme5(showGimme5)}
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/gimme.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginRight: "5em",
            transition: ".3s ease all",
          }}
        >
        </button>

        <NavLink
          to="#"
onClick={() => setShowRange(showRange)}
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/range.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: ".3s ease all",
          }}
        >
        </NavLink>

      </div >
<div className="banner">
<p>{selection === "today" && <ApodToday/>}</p>
<p>{selection === "choose" && <ApodChoose/>}</p>
<p>{selection === "gimme" && <ApodGimme5/>}</p>
<p>{selection === "range"  && <ApodRange/>}</p>

</div>


{options.map(opt => <button type="button" key={opt} onClick={e=> setSelection(opt)}>{opt}</button>)}
    <nav className="banner "></nav>
      
    </>
  );
}


