import React from "react";

function Console({id, title, url, date, copyright, explanation, isLike, addEntry, deleteEntry }) {
  return (
    <div className="banner content">
      <h4 className="text-center">{title}</h4>
      <img className="pic" alt="astronomy pic" src={url} />
      {isLike && (
        <button className="presenter" onClick={() => deleteEntry(id)}>
          Delete Entry
        </button>
      )}
      {!isLike && (
        <button
          className="presenter"
          onClick={() => addEntry({ id, title, url, date, copyright, explanation })}
        >
          Add Entry
        </button>
      )}
    </div>
  );
}

export default Console;
