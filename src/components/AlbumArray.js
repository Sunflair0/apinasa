import React from "react";


function AlbumArray({ val, entry, isLiked, addEntry, removeEntry }) {
  return (
    <div className="presenter">
      <h4>{val.title}</h4>
      <h3>{val.id}</h3>
      <img src={val.url} alt={val.id} />
      <h4>{val.date}</h4>
      <h4>{val.copyright}</h4>
      <h5>{val.explanation}</h5>

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
