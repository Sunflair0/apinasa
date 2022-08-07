import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { add, remove, entry } from "../../../redux/features/albumSlice";


const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodToday = ({
  addEntry,
  removeEntry,
  isLiked

}) => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetchApod();

    async function fetchApod() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setApodData(data);
    }
  }, []);

  if (!apodData) return <div />;

  return (
    <div className="content_flexbox">
      <h3>Here it is, the famous Astronomy Picture Of the Day from NASA. If you like it, add it to your Album. Then you can visit it whenever you like. Click on the picture to open in another tab in your browser.</h3>

      <div className="flex3">
        <div className="apodPhoto">
          <div className="infobox stylebox">
            {apodData.media_type === "image" ? (
              <img onClick={() =>window.open(apodData.url,"apodblank")}
                src={apodData.url}
                alt={apodData.title}
                id={apodData.id}
                key={apodData.id}
              />
            ) : (
              <iframe 
                title="space-video"
                src={apodData.url}
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

            <h1>{apodData.title}</h1>
            <p className="date">{apodData.date}</p>
            <p className="urla">{apodData.url} </p>
            <p className="copyright">{apodData.copyright} (copyright)</p>
            <p className="explanation">{apodData.explanation}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApodToday);
