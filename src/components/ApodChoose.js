import React, { useEffect, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';
const apiKey = process.env.REACT_APP_NASA_KEY;



export default function ApodChoose() {
  const [chooseData, setChooseData] = useState(new Date());;
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);


  useEffect(() => {
    fetchChoose();

    async function fetchChoose() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      );
      const data = await res.json();
      setChooseData(data);
    }
  }, []);

  if (!chooseData) return <div />;



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

      <div className="content stylebox">
        <div className="apodPhoto">
          {chooseData.media_type === "image" ? (
            <img
              src={chooseData.url}
              alt={chooseData.title}
            />
          ) : (
            <iframe
              title="space-video"
              src={chooseData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
          <div>
            <h1>{chooseData.title}</h1>
            <p className="date">{chooseData.date}</p>
            <p className="url">{chooseData.url} </p>
            <p className="copyright">{chooseData.copyright} (copyright)</p>
            <p className="explanation">{chooseData.explanation}</p>
          </div>
        </div>
      </div>
    </>
  );
}