import React, { useEffect, useState, } from 'react';
import { addEntry, deleteEntry } from "../redux/actions";
import { connect } from "react-redux";

const apiKey = process.env.REACT_APP_NASA_KEY;

 function ApodToday() {
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
    <>
     
      <div className="content stylebox">
        <div className="apodPhoto">
          {apodData.media_type === "image" ? (
            <img
              src={apodData.url}
              alt={apodData.title}

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
          <div className="infobox">
            <h1>{apodData.title}</h1>
            <p className="date">{apodData.date}</p>
            <p className="urla">{apodData.url} </p>
            <p className="copyright">{apodData.copyright} (copyright)</p>
            <div className="exBox"></div>
            <p className="explanation">{apodData.explanation}</p>
                    </div></div></div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    album: state.album    
  };
}

const mapDispatchToProps = {
  deleteEntry,
  addEntry  
};

export default connect(mapStateToProps, mapDispatchToProps)(ApodToday);

