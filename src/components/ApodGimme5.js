import React, { useEffect, useState, useMemo } from 'react';
import { connect } from "react-redux";
import { addEntry, deleteEntry } from '../redux/actions';
import Console from './Console';
const apiKey = process.env.REACT_APP_NASA_KEY;


const ApodGimme5 = ({
  addEntry,
  deleteEntry,
  album

}) => {
  const [gimme5Data, setGimme5Data] = useState(null);
  const likedIds = useMemo(() => {
    return album.map((val) => val.id);
  }, [album]);

  useEffect(() => {
    fetchGimme5();

    async function fetchGimme5() {
      const res = await fetch(

        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`
      );
      const data = await res.json();
      setGimme5Data(data);
    }
  }, []);

  if (!gimme5Data) return <div />;

  return (
    <>
      <h3>Bam! Here you are, five stunning pictures from NASA's library from past APODs. See something you like? Click the Add button and keep it for yourself.</h3>

      <div className="flex3">
        <div className="apodPhoto">
          {gimme5Data.map(item => (
            <div className="infobox stylebox">

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
  addEntry,

};

export default connect(mapStateToProps, mapDispatchToProps)(ApodGimme5);