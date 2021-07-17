import React from "react";

function Console({ id, title, url, isFav, addFavorite, deleteFavorite, byDate, startDate, endDate  }) {
  return (
    <div className="presenter">
      <h4 className="text-center">{title}</h4>
      <img className="gif" alt="fun gif" src={url} />
      {isFave && (
        <button className="btn fav-btn" onClick={() => deleteFavorite(id)}>
          Delete Favorite
        </button>
      )}
      {!isFav && (
        <button
          className="btn fav-btn"
          onClick={() => addFavorite({ id, title, url })}
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default Console;
