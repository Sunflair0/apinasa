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
const [selections, setSelections]=useState("")

	return (
		<>
<p>{options === "<ApodToday/>"}</p>
<p>{options === "<ApodChoose/>"}</p>
<p>{options === "<ApodGimme5/>"}</p>
<p>{options === "<ApodRange/>"}</p>


{options.map(selections => (<button type="button" key={selections} onClick={() => setSelections(selections)}></button>))}

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


