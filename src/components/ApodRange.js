
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function ApodRange() {
    const [rangeData, setRangeData] = useState(null);
    const [date, setDate] = useState(new Date());
    const [start_date, setStart_Date] = useState();
    const [end_date, setEnd_Date] = useState();

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

    return (
        <>
            <DatePicker selected={date} onChange={date => setDate(date)} />

            return (
            <div className="flex3">
                <p>Want to see a range of days for Picture of the Day? Choose a date before June 16th,
                    1995. If you like it, add it to your Album.</p>

                <DatePicker
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
                    placeholderText="Select a start date"
                />

                <DatePicker
                    required
                    selected={end_date}
                    onChange={(date) => setEnd_Date(date)}
                    selectsEnd
                    startDate={start_date}
                    endDate={end_date}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date(1995, 6, 16)}
                    maxDate={new Date()}
                    placeholderText="Select an end date"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showMonthDropdown
                    useShortMonthInDropdown
                    fixedHeight
                />          
                    <div className="content stylebox">
                        {rangeData.map(item => (
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
                </div>
        </>
    );
}



