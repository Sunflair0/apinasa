
import React, { useState, useEffect, useMemo } from 'react';
import { connect } from "react-redux";
import { add, remove, entry, isLiked } from "../../../redux/features/albumSlice";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodRange = ({
    addEntry,
    removeEntry,
    album

}) => {
    const [rangeData, setRangeData] = useState(null);
    const [date, setDate] = useState(new Date());
    const [start_date, setStart_Date] = useState( () => {
    const newDate = new Date();
        return new Date(newDate.setDate(newDate.getDate() - 2));
    });

    const [end_date, setEnd_Date] = useState(new Date());
    const likedIds = useMemo(() => {
        return album.map((val) => val.id);
    }, [album]);

    useEffect(() => {
        fetchRange();

function formatDate(date){
return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

        async function fetchRange() {
            let myStartDate=formatDate(start_date)
            let myEndDate=formatDate(end_date)

            const res = await fetch(

            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${myStartDate}&end_date=${myEndDate}`
            );
            const data = await res.json();
console.log(data)
            setRangeData(data);
        }
    }, [start_date, end_date]);

    if (!rangeData) return <div />;

    <DatePicker selected={date} onChange={date => setDate(date)} />

    return (
        <div className="">
            <h3>Want to see a range of days for Picture of the Day? We start you off with three, but feel free to choose your own range and add to your album at will.</h3>
<div>Choose a start date</div>
            <div style={{ textShadow: "-1px -1px rgb(255, 255, 255)" }}>

                <DatePicker style={{ textShadow: "-1px -1px transparent" }}
                    required
                    selected={start_date}
                    onChange={(date) => setStart_Date(date)}
                    selectsStart
                    startDate={start_date}
                    endDate={end_date}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showMonthDropdown
                    useShortMonthInDropdown
                    fixedHeight
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date(1995, 6, 16)}
                    maxDate={new Date()}
                />
<div style={{ textShadow: "-1px -1px transparent" }}>Choose an end date</div>
                <DatePicker style={{ textShadow: "-1px -1px transparent" }}

                    required
                    selected={end_date}
                    onChange={(date) => setEnd_Date(date)}
                    selectsEnd
                    startDate={start_date}
                    endDate={end_date}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date(1995, 6, 16)}
                    maxDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showMonthDropdown
                    useShortMonthInDropdown
                    fixedHeight
                /></div>

                
            <div className="">
                <div className="apodPhoto">
                    {rangeData.map(item => (
                        <div className=" infobox stylebox">
                            {item.media_type === "image" ? (
                               <img onClick={() =>window.open(item.url,"apodblank")}
                                    src={item.url}
                                    alt={item.title}
                                    id={item.id}
                                    key={item.id}
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

                    
          {isLiked && (
        <button className="like-btn" onClick={() => removeEntry(entry.id)}>
          Delete from Album
        </button>
      )}
      {!isLiked && (
        <button
          button className="like-btn"
          onClick={() => addEntry( entry )}>
          Add to Album
        </button>
)}

                            <h1>{item.title}</h1>
                            <p className="date">{item.date}</p>
                            <p className="url">{item.url} </p>
                            <p className="copyright">{item.copyright} (copyright)</p>
                            <p className="explanation">{item.explanation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: (entry) => dispatch(add(entry)),
      remove: (id) => dispatch(remove(id)),
    };
  };
  
  const mapStateToProps = (state) => ({
    album: state.album,
    loggedInUser: state.user,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ApodRange);