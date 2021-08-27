import React, { useEffect, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';
const apiKey = process.env.REACT_APP_NASA_KEY;


export default function Date() {
  const [dateData, setDateData] = useState(null);


  useEffect(() => {
    fetchDate();

    async function fetchDate() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&{date}`
      );
      const data = await res.json();
      setDateData(data);
    }
  }, []);

  if (!dateData) return <div />;



  return (
    <>
      <div className="banner">

        <NavLink
          to="/apod"
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
          to="/chooseApod"
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

        <NavLink
          to="/gimme5"
          style={{
            height: "120px",
            width: "100px",
            backgroundImage: "url(./assets/gimme.png)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: ".3s ease all",
          }}
        >
        </NavLink>
      </div>

<div className="content">

<input type="date"></input></div>

      <div className="content stylebox">
      <div className="apodPhoto">
          {dateData.media_type === "image" ? (
            <img
              src={dateData.url}
              alt={dateData.title}

            />
          ) : (
            <iframe
              title="space-video"
              src={dateData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div>
            <h1>{dateData.title}</h1>
            <p className="date">{dateData.date}</p>
            <p className="url">{dateData.url} </p>
            <p className="copyright">{dateData.copyright} (copyright)</p>
            <p className="explanation">{dateData.explanation}</p>
          </div>
        </div></div>
    </>
  );
}
