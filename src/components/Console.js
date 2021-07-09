import React from "react";

function Console({ id, title, url, isFav, addFavorite, deleteFavorite, addDonki, deleteDonki, addEonet, deleteEonet, addExoplanet, deleteExoplanet }) {
  return (
    <div className="presenter">
      <h4 className="text-center">{title}</h4>
      <img className="gif" alt="fun gif" src={url} />
      {isFav && (
        <button className="presenter" onClick={() => deleteFavorite({id, deleteDonki, deleteEonet, deleteExoplanet})}>
          Delete Favorite
        </button>
      )}
      {!isFav && (
        <button
          className="presenter"
          onClick={() => addFavorite({ id, title, url, addDonki, addEonet, addExoplanet })}
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default Console;
