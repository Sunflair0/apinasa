import React, { useEffect, useState, } from 'react';
import { connect } from "react-redux";
import { add, remove, entry, isLiked } from "../../../redux/features/albumSlice";
const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodChoose = ({
  addEntry,
  removeEntry,
  album

}) => {
  const [chooseData, setChooseData] = useState(new Date());
  const [date, setDate] = useState(new Date(2007, 2, 25));
  const handleChange = date => { setDate(date) };

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
    <div className="">
      <h3 >Want to see a different Picture of the Day? Choose a date before June 16th,
        1995. If you like it, add it to your Album.</h3>

      <div style={{ textShadow: "-1px -1px transparent" }}>
        <label for='tell me'></label>
        <input type="date" minDate={new Date(1995, 6, 16)}
          defaultValue={3 - 25 - 2007}
          maxDate={new Date()}
          required
          dateFormat="yyyy-MM-dd"
          selected={date}
          onChange={handleChange}
        />
<button className="like-btn" onClick={handleChange}>Submit</button>


        {/* <DatePicker 
        
        showYearDropdown
        scrollableMonthYearDropdown
        showMonthDropdown
        useShortMonthInDropdown
        fixedHeight        
      
popperModifiers={{
                        offset: {
                          enabled: true,
                          offset: "0px, 0px"
                        },
preventOverflow: {
                          enabled: true,
                          escapeWithReference: false,
                          boundariesElement: "scrollParent"
                        }
                      }}
        /> */}
      </div>
      <div className="">
        <div className="apodPhoto">
          <div className=" infobox stylebox" >
            {chooseData.media_type === "image" ? (
              <img onClick={() => window.open(chooseData.url, "apodblank")}
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

            {isLiked && (
              <button className="like-btn" onClick={() => removeEntry(entry.id)}>
                Delete from Album
              </button>
            )}
            {!isLiked && (
              <button
                button className="like-btn"
                onClick={() => addEntry(entry)}>
                Add to Album
              </button>
            )}

            <h1>{chooseData.title}</h1>
            <p className="date">{chooseData.date}</p>
            <p className="url">{chooseData.url} </p>
            <p className="copyright">{chooseData.copyright} (copyright)</p>'
            {/* if (chooseData.copyright ==!null) return;'
            <p className="copyright">{chooseData.copyright} (copyright)</p>'
            else return; ""; */}
            <p className="explanation">{chooseData.explanation}</p>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApodChoose);
