import React, { useEffect, useMemo, useState } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearch, addFavorite, deleteFavorite } from "../redux/actions";


const Search = ({
    addFavorite,
    deleteFavorite,
    favorites,
    username,
    setSearch,
    search,

}) => {
    const [searchField, setSearchField] = useState("");
    const [query, setQuery] = useState("");
    const { data, loading, error } = useFetch(query);
    const faveIds = useMemo(() => {
      return favorites.map((val) => val.id);
    }, [favorites]);
  
    useEffect(() => {
      if (data) {
        setSearch(data.data);
      }
    }, [data]);



// For the APOD - you would pass https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY as the baseURL argument
// URL WOULD BE
// &date=YYYY-MM-DD for the picture of one day
// &start_date=YYYY-MM-DD&end_date=YYYY-MM-DD for a range
// &count=5 for 5 random images
export default function useFetch(url, baseUrl) {


//! the button for 5 random
//! setQuery("&count=5")
//! button for a date
//! assume we have a piece of state called byDate
//! byDate is in a YYYY-MM-DD format
//! setQuery(`&date=${byDate}`)
//! button for date range
//! Assume wwe have two pieces of state startDate and endDate
//! Both of those are in YYYY-MM-DD format
//! setQuery(`&start_date=${startDate}&end_date=${endDate}`)

<input value={date1} onChange={(e) => setDate1(e.target.value)} type="date"/>


return (
    <div>
      <h2 className="text-center">Welcome {username}</h2>
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
        <div className="flex-wrap"></div>
        {search.map((gif) => (
            <GifDisplay
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFave={faveIds.includes(gif.id)}
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
    username: state.user.username,
    favorites: state.favorites,
    search: state.search,
};
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
