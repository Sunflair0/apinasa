import React from "react";

function Console({ id, title, url, isLiked, addEntry, deleteEntry }) {
  return (
    <div className="presenter">
      <h4 className="center">{title}</h4>
     
      {isLiked && (
        <button className="like-btn" onClick={() => deleteEntry(id)}>
          Delete from Album
        </button>
      )}
      {!isLiked && (
        <button
          button className="like-btn"
          onClick={() => addEntry({ id, title, url })}
        >
          Add to Album
        </button>
      )}
    </div>
  );
}

export default Console;
