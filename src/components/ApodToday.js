import React, { useEffect, useState, } from 'react';

import { NavLink } from 'react-router-dom';
const apiKey = process.env.REACT_APP_NASA_KEY;


export default function ApodToday() {
  const [apodData, setApodData] = useState(null);


  useEffect(() => {
    fetchApod();

    async function fetchApod() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setApodData(data);
    }
  }, []);

  if (!apodData) return <div />;



  return (
    <>
      <div className="banner ">
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
     
      <div className="content stylebox">
        <div className="apodPhoto">
          {apodData.media_type === "image" ? (
            <img
              src={apodData.url}
              alt={apodData.title}

            />
          ) : (
            <iframe
              title="space-video"
              src={apodData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div className="infobox">
            <h1>{apodData.title}</h1>
            <p className="date">{apodData.date}</p>
            <p className="urla">{apodData.url} </p>
            <p className="copyright">{apodData.copyright} (copyright)</p>
            <div className="exBox"></div>
            <p className="explanation">{apodData.explanation}</p>

          </div></div></div>
    </>
  );
}


