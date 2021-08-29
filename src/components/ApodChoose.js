import React, { useEffect, useMemo, useState, } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from "react-redux";
import {setSearch, addEntry, deleteEntry} from "../redux/actions";
const apiKey = process.env.REACT_APP_NASA_KEY;


const ApodChoose = ({
  addEntry,
  deleteEntry,
  Album,
  clienttag,
  setSearch,
  search
}) => {

  
  const [dateData, setDateData] = useState();
  const handleChange = date => setDateData(date);
  


  useEffect(() => {
    fetchDate();

    async function fetchDate() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&${dateData}`
      );
      const data = await res.json();
      setDateData(data);
    }
  }, [dateData]);

  if (!dateData) return <div />;



  return (
    <>
<div className="content2">
  <p>Want to see a different Picture of the day? Choose a date before June 16th, 1995. If you like it, add it to your Album.</p>
<DatePicker 
required
onChange={handleChange}
selected={dateData} 
dateFormat="yyyy/MM/dd"
minDate={new Date("1995-06-16")}
maxDate={new Date()}
placeholderText="Select a date"
isClearable
showYearDropdown
scrollableYearDropdown
showMonthDropdown
useShortMonthInDropdown
fixedHeight
/>
</div>



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

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    album: state.album,
    search: state.search,
  };
}

const mapDispatchToProps = {
  deleteEntry,
  addEntry,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApodChoose);