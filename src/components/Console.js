import React from "react";

function Console({ id, title, url, isFav, addFavorite, deleteFavorite, addapod, deleteapod }) {
  return (
    <div className="presenter">
      <h4 className="text-center">{title}</h4>
      <img className="gif" alt="fun gif" src={url} />
      {isFav && (
        <button className="presenter" onClick={() => deleteFavorite({id, deleteapod })}>
          Delete Favorite
        </button>
      )}
      {!isFav && (
        <button
          className="presenter"
          onClick={() => addFavorite({ id, title, url, addapod })}
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default Console;
