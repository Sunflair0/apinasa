import React from "react";

function Console({ id, title, url, isLiked, addEntry, deleteEntry, addapod, deleteapod }) {
  return (
    <div className="presenter">
      <h4 className="center">{title}</h4>
      <img className="pic" alt="astronomy pic" src={url} />
      {isLiked && (
        <button className="presenter" onClick={() => deleteEntry({id, deleteapod })}>
          Delete Entry
        </button>
      )}
      {!isLiked && (
        <button
          className="presenter"
          onClick={() => addEntry({ id, title, url, addapod })}
        >
          Add Entry
        </button>
      )}
    </div>
  );
}

export default Console;
