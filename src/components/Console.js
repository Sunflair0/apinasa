import React from "react";
import { Animation } from "react-animations";

function Console({ id, title, url, isFav, addFavorite, deleteFavorite }) {
  return (
    <div className="presentation">
      <h4 className="presentation">{title}</h4>
      <img className="gif" alt="random" src="{url}" />
      {!isFav && (
        <button
          className="btnfav"
          onClick={() => addFavorite({ id, title, url })}
        >
          Add Favorite
        </button>
      )}
      {isFave && (
        <button className="btnfav" onClick={() => deleteFavorite(id)}>
          Delete Favorite
        </button>
      )}
    </div>
  );
}

export default Console;
