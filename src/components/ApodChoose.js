import React, { useEffect, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';
const apiKey = process.env.REACT_APP_NASA_KEY;



export default function ApodChoose() {
  const [date, setDate] = useState(new Date());;
  const handleChange = dateData => setDate(date);


  useEffect(() => {
    fetchDate();

    async function fetchDate() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      );
      const data = await res.json();
      ;
    }
  }, []);

  if (!date) return <div />;



  return (
    <>
      <div className="banner ">
        <p>Want to see a different Picture of the Day? Choose a date before June 16th,
          1995. If you like it, add it to your Album.</p>

        <DatePicker
          required
          selected={date}
          onChange={handleChange}
          dateFormat="yyyy-MM-dd"
          minDate={new Date(1995, 6, 16)}
          maxDate={new Date()}
          placeholderText="Select a date"
          showYearDropdown
          scrollableMonthYearDropdown
          showMonthDropdown
          useShortMonthInDropdown
          fixedHeight
        />
</div>
<div className="banner">
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

      <div className="content">

        <input type="date"></input></div>

      <div className="content stylebox">
        <div className="apodPhoto">
          {date.media_type === "image" ? (
            <img
              src={date.url}
              alt={date.title}
            />
          ) : (
            <iframe
              title="space-video"
              src={date.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div>
            <h1>{date.title}</h1>
            <p className="date">{date.date}</p>
            <p className="url">{date.url} </p>
            <p className="copyright">{date.copyright} (copyright)</p>
            <p className="explanation">{date.explanation}</p>
          </div>
        </div>
      </div>
    </>
  );
}
