import React, { useEffect, useMemo, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Album from './Album';
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function ApodRange() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
        const likeIDs = useMemo(()=> {
        return Album.map((val) => val.id);
    }, []);

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
   };
 
    
//    useEffect(() => {
//     fetchDate();

//     async function fetchDate() {
//       const res = await fetch(

//         `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date${startDate}&end_date=${endDate}`
//       );
//       const data = await res.json();
//       setDateData(data);
//     }
//   }, []);

//   if (!dateData) return <div />;



  return (
    <> 

<div className="content">
{/* 
<DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      fixedHeight
    />

      { <div className="content stylebox">
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
        } */}
        </div> 
    </>
  );
}
