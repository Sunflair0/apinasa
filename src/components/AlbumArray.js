import React from "react";


function AlbumArray({ entry, isLiked, addEntry, removeEntry }) {
  return (
    <div className="presenter">
      {/* <h4>{entry.title}</h4> */}
      {/* <h3>{entry.id}</h3> */}
      {/* <img src={entry.url} alt={entry.id} /> */}
      {/* <h4>{entry.date}</h4> */}
      {/* <h4>{entry.copyright}</h4> */}
      {/* <h5>{entry.explanation}</h5> */}

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
    </div>
  );
}

export default AlbumArray;
