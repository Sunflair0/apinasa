import React, { useEffect, useState, } from 'react';
import useFetch from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';
const apiKey = process.env.REACT_APP_NASA_KEY;


export default function Gimme5() {
  const [gimme5Data, setGimme5Data] = useState(null);


  useEffect(() => {
    fetchGimme5();

    async function fetchGimme5() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`
      );
      const data = await res.json();
      setGimme5Data(data);
    }
  }, []);

  if (!gimme5Data) return <div />;



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

      <div className="content stylebox">
	  <div className="apodPhoto">
          {gimme5Data.media_type === "image" ? (
            <img
              src={gimme5Data.url}
              alt={gimme5Data.title}

            />
          ) : (
            <iframe
              title="space-video"
              src={gimme5Data.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div>
            <h1>{gimme5Data.title}</h1>
            <p className="date">{gimme5Data.date}</p>
            <p className="url">{gimme5Data.url} </p>
            <p className="copyright">{gimme5Data.copyright} (copyright)</p>
            <p className="explanation">{gimme5Data.explanation}</p>
          </div>
        </div></div>
    </>
  );
}
