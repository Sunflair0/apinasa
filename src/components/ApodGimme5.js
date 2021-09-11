import React, { useEffect, useState, useMemo } from 'react';
import { connect } from "react-redux";
import { addEntry, deleteEntry } from '../redux/actions';
import Console from './Console';
const apiKey = process.env.REACT_APP_NASA_KEY;


const ApodGimme5 = ({
  addEntry,
  deleteEntry,
  album,
  isLiked,
  id,
  pic

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
      <div className=""></div>
      <div className="apodPhoto">
        {gimme5Data.map(item => (
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
    </>
  );
}

function mapStateToProps(state) {
  return {
    album: state.album,

  };
}

const mapDispatchToProps = {
  deleteEntry,
  addEntry
};


export default connect(mapStateToProps, mapDispatchToProps)(ApodGimme5);
