import React, { useEffect, useMemo, useState } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearch, addEntry, deleteEntry } from "../redux/actions";

const Search = ({
  addEntry,
  deleteEntry,
  album,
  clienttag,
  setSearch,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const favIds = useMemo(() => {
    return album.map((val) => val.id);
  }, [album]);

  useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data, setSearch]);

  return (
    <div className="content">
      <h2 className="splash">Welcome, {clienttag}</h2>
      <form className="form">
        <div>
          <label htmlFor="Submit"></label>
          <input
            id="search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="We will be up and running soon"
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(searchField);
          }}
        >
          Submit
        </button>
      </form>
      {loading && <div className="text-center">Loading Gifs</div>}
      {error && <div className="text-center">{error}</div>}
      {search && (
        <div className="flex-wrap">
          {search.map((gif) => (
            <Console
              deleteEntry={deleteEntry}
              addEntry={addEntry}
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
    album: state.album,
    search: state.search,
  };
}

const mapDispatchToProps = {
  deleteEntry,
  addEntry,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
