import React, { useEffect, useState, } from 'react';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';
import { NavLink, Link } from 'react-router-dom';


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

			<nav className="banner ">

				<Link 
					to="/apodtoday"
					style={{
						height: "120px",
						width: "100px",
						backgroundImage: "url(./assets/today.png)",
						borderRadius: "50px",
						marginRight: "100px",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'

					}}
				>
				</Link>

				<NavLink
					to="/apodchoose"
					style={{
						height: "120px",
						width: "120px",
						backgroundImage: "url(./assets/choose.png)",
						marginRight: "100px",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
				</NavLink>

				<NavLink
					to="/apodgimme5"
					style={{
						height: "120px",
						width: "100px",
						backgroundImage: "url(./assets/gimme.png)",
						marginRight: "100px",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',

					}}
				>
				</NavLink>

				<NavLink
					to="/apodrange"
					style={{
						height: "120px",
						width: "130px",
						backgroundImage: "url(./assets/range.png)",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',

					}}
				>
				</NavLink>
			</nav>




		</>
	);
}


