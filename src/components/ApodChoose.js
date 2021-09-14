import React, { useEffect, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  }, [date]);

  if (!chooseData) return <div />;

  return (
    <>
      <p className="flex3">Want to see a different Picture of the Day? Choose a date before June 16th,
        1995. If you like it, add it to your Album.</p>

      <DatePicker
        required
        selected={date}
        onChange={handleChange}
        showYearDropdown
        scrollableMonthYearDropdown
        showMonthDropdown
        useShortMonthInDropdown
        fixedHeight
        dateFormat="yyyy-MM-dd"
        minDate={new Date(1995, 6, 16)}
        maxDate={new Date()}
        placeholderText="Select a date"
      />

      <div className="stylebox">
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