import React, { useEffect, useState, useMemo } from 'react';
import { connect } from "react-redux";
import AlbumArray from "../components/AlbumArray";
import { add, remove } from "../redux/features/albumSlice";
import Album from './Album';

const apiKey = process.env.REACT_APP_NASA_KEY;

const ApodToday = ({
  addEntry,
  removeEntry,
  album

}) => {
  const [apodData, setApodData] = useState(null);
  const likedIds = useMemo(() => {
    return album.map((val) => val.id);
  }, [album]);

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
            <Album
              removeEntry={removeEntry}
              addEntry={addEntry}
              isLiked={likedIds.includes(apodData.id)}
              key={apodData.id}
              id={apodData.id} />

            <h1>{apodData.title}</h1>
            <p className="date">{apodData.date}</p>
            <p className="urla">{apodData.url} </p>
            <p className="copyright">{apodData.copyright} (copyright)</p>
            <p className="explanation">{apodData.explanation}</p>
          </div>
        </div>
      </div>
    </>
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
