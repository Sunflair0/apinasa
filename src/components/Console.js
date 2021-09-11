import React from "react";

function Console({ id, title, url, isLiked, addEntry, deleteEntry, pic }) {
  return (
    <div className="flex1">
      <h4 className="presenter">{title}</h4>
     
      {isLiked && (
        <button className="like-btn" onClick={() => deleteEntry(id)}>
          Delete from Album
        </button>
      )}
      {!isLiked && (
        <button
          button className="like-btn"
          onClick={() => addEntry({ id, title, url, pic })}
        >
          Add to Album
        </button>
      )}
    </div>
  );
}

export default Console;
