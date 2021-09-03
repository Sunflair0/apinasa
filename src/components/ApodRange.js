import React, { useState, } from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function ApodRange() {

	const [start_date, setStart_Date] = useState();
	const [end_date, setEnd_Date] = useState();
	const handleChange = dateData => setEnd_Date(end_date);


	useEffect(() => {
		fetchApod();

		async function fetchApod() {
			const res = await fetch(

				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_date}&end_date=${end_date}`
			);
			const data = await res.json();
			setApodData(data);
		}
	}, []);

	if (!apodData) return <div />;



	return (
		<>


			return (
			<div className="banner ">

				<p>Want to see a range of days for Picture of the Day? Choose a date before June 16th,
					1995. If you like it, add it to your Album.</p>

				<DatePicker
					required
					selected={start_date}
					onChange={(date) => setStart_Date(date)}
					selectsStart
					startDate={start_date}
					endDate={end_date}
					minDate={new Date(1995, 6, 16)}
					maxDate={new Date()}
					placeholderText="Select a start date"
				/>
				<DatePicker
					selected={end_date}
					onChange={(date) => setEnd_Date(date)}
					selectsEnd
					startDate={start_date}
					endDate={end_date}
					dateFormat="yyyy-MM-dd"
					minDate={new Date(1995, 6, 16)}
					maxDate={new Date()}
					placeholderText="Select an end date"
					showYearDropdown
					scrollableMonthYearDropdown
					showMonthDropdown
					useShortMonthInDropdown
					fixedHeight
				/>

				<div className="content">
					<NavLink
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
					</NavLink>

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
				</div>
			</div>
		</>
	)
}
