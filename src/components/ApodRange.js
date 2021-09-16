
import React, { useState, useEffect, useMemo } from 'react';
import { connect } from "react-redux";
import { addEntry, deleteEntry } from '../redux/actions';
import Console from './Console';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodRange = ({
    addEntry,
    deleteEntry,
    album

}) => {
    const [rangeData, setRangeData] = useState(null);
    const [date, setDate] = useState(new Date());
    const [start_date, setStart_Date] = useState();
    const [end_date, setEnd_Date] = useState();
    const likedIds = useMemo(() => {
        return album.map((val) => val.id);
    }, [album]);

    useEffect(() => {
        fetchRange();

        async function fetchRange() {
            const res = await fetch(

                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_date}&end_date=${end_date}`
            );
            const data = await res.json();
            setRangeData(data);
        }
    }, [start_date, end_date]);

    if (!rangeData) return <div />;

    <DatePicker selected={date} onChange={date => setDate(date)} />

    return (
        <>
            <h3>Want to see a range of days for Picture of the Day? Choose a date before June 16th,
                1995. If you like it, add it to your Album.</h3>

            <div style={{ textShadow: "-1px -1px rgb(255, 255, 255)" }}>
                <DatePicker style={{ textShadow: "-1px -1px white" }}
                    required
                    selected={date}
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

                <DatePicker style={{ textShadow: "-1px -1px white" }}
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

                
            <div className="flex3">
                <div className="apodPhoto">
                    {rangeData.map(item => (
                        <div className=" infobox stylebox">

                            {item.media_type === "image" ? (
                                <img
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

                            <Console
                                deleteEntry={deleteEntry}
                                addEntry={addEntry}
                                isLiked={likedIds.includes(item.id)}
                                key={item.id}
                                id={item.id} />

                            <h1>{item.title}</h1>
                            <p className="date">{item.date}</p>
                            <p className="url">{item.url} </p>
                            <p className="copyright">{item.copyright} (copyright)</p>
                            <p className="explanation">{item.explanation}</p>
                        </div>
                    ))}
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


export default connect(mapStateToProps, mapDispatchToProps)(ApodRange);



