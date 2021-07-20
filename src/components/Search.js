import React, { useEffect, useMemo, useState } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearches, addFavorite, deleteFavorite } from "../redux/actions";

const Search = ({
  addFavorite,
  deleteFavorite,
  favorites,
  clienttag,
  setSearches,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const favIds = useMemo(() => {
    return favorites.map((val) => val.id);
  }, [favorites]);

  useEffect(() => {
    if (data) {
      setSearches(data.data);
    }
  }, [data, setSearches]);

  return (
    <div>
      <h2 className="text-center">Welcome {clienttag}</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="Search for Gifs"
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(searchField);
          }}
        >
          Search
        </button>
      </form>
      {loading && <div className="text-center">Loading Gifs</div>}
      {error && <div className="text-center">{error}</div>}
      {search && (
        <div className="flex-wrap">
          {search.map((gif) => (
            <Console
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFav={favIds.includes(gif.id)}
              id={gif.id}
              title={gif.title}
              url={gif.images.original.url}
              key={gif.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    favorites: state.favorites,
    search: state.search,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearches,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
