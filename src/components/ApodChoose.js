import React, { useEffect, useState, useMemo } from 'react';
import { connect } from "react-redux";
import { addEntry, deleteEntry } from '../redux/actions';
import Console from './Console';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodChoose = ({
  addEntry,
  deleteEntry,
  album

}) => {
  const [chooseData, setChooseData] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);
  const likedIds = useMemo(() => {
    return album.map((val) => val.id);
  }, [album]);

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
  console.log(date)

  if (!chooseData) return <div />;

  return (
    <>
      <h3 >Want to see a different Picture of the Day? Choose a date before June 16th,
        1995. If you like it, add it to your Album.</h3>

      <div style={{ textShadow: "-1px -1px transparent" }}>
        <DatePicker
          required
          dateFormat="yyyy-MM-dd"
          selected={date}
          onChange={handleChange}
          showYearDropdown
          scrollableMonthYearDropdown
          showMonthDropdown
          useShortMonthInDropdown
          fixedHeight

          minDate={new Date(1995, 6, 16)}
          maxDate={new Date()}
        />
      </div>
      <div className="flex3">
        <div className="apodPhoto">
          <div className=" infobox stylebox" >
            {chooseData.media_type === "image" ? (
              <img
                src={chooseData.url}
                alt={chooseData.title}
                id={chooseData.id}
                key={chooseData.id}
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
            <Console
              deleteEntry={deleteEntry}
              addEntry={addEntry}
              isLiked={likedIds.includes(chooseData.id)}
              key={chooseData.id}
              id={chooseData.id} />

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

function mapStateToProps(state) {
  return {
    album: state.album

  };
}

const mapDispatchToProps = {
  deleteEntry,
  addEntry
};


export default connect(mapStateToProps, mapDispatchToProps)(ApodChoose);