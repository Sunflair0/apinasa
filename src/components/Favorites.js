import React from "react";
import Console from "./Console";
import { connect } from "react-redux";
import { deleteFavorite } from "../redux/actions";

const Favorites = ({ favorites, deleteFavorite, clienttag }) => {
  return (
    <>
      <h2 className="text-center">Favorites for {clienttag}</h2>
      <div className="flex-wrap">
        {favorites.map((gif) => (
          <Console
            id={gif.id}
            isFav={true}
            deleteFavorite={deleteFavorite}
            title={gif.title}
            url={gif.url}
            key={gif.id}
          />
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    favorites: state.favorites,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
