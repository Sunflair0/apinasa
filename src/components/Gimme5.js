import React, { useEffect, useState, } from 'react';
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
{gimme5Data.map(item => (
 <div className="apodPhoto">



          {item.media_type === "image" ? (
            <img
              src={item.url}
              alt={item.title}

            />
          ) : (
            <iframe
              title="space-video"
              src={item.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div>
            <h1>{item.title}</h1>
            <p className="date">{item.date}</p>
            <p className="url">{item.url} </p>
            <p className="copyright">{item.copyright} (copyright)</p>
            <p className="explanation">{item.explanation}</p>
          </div>
        </div>
))}

 

</div> 
    </>
  );	  
}
