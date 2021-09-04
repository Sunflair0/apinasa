import React, { useState, } from 'react';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';



export default function ApodConsole() {
const [aToday, setAToday] = useState(true);
const [aChoose, setAChoose] =useState();
const [aGimme5, setAGimme5] =useState();
const [aRange, setARange] =useState();

const showChoose = () => setAChoose(!aChoose)
const options =["<ApodToday/>","<ApodChoose/>","<ApodGimme5/>","<ApodRange/>"];
const [selection, setSelection]=useState("")

	return (
		<>
<p>{selection === "<ApodToday/>"}</p>
<p>{selection === "<ApodChoose/>"}</p>
<p>{selection === "<ApodGimme5/>"}</p>
<p>{selection === "<ApodRange/>"}</p>


{options.map(opt => <button type="button" key={opt} onClick={e=> setSelection(opt)}>{opt}</button>)}
    <nav className="banner "></nav>
      
    </>
  );
}


