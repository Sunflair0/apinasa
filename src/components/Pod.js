import React, { useEffect, useState } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions";

const apods = ({ addFavorite, deleteFavorite, apod, clienttag, setQuery})
  => { return (

    <div>
      <div className="headtitle">Astronomy Picture of the Day
</div>
      
        <div className="form-field flex-wrap">
          <label htmlFor="search">Gimme Picture of the Day!</label>
          <input
            id="apod"
            value={apod}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Picture of the Day"
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&date=${byDate}`);
          }}
        >
          Gimmie apod!
        </button>
<div>
    <h3> Gimmie a Range!</h3>
        <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setStartDate(`&start_date==${startDate}`);
          }}
        ></input> TO
            <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setEndDate(`&end_date=${endDate}`);
          }}
        >
        </input>
        </div>

      
      <div> <h3> Gimmie Five!</h3>
      <input type="button"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&count=5`);
          }}
        ></input>
      </div>
    
      {loading && <div className="text-center">Loading apods</div>}
      {error && <div className="text-center">{error}</div>}
      {search && (
        <div className="flex-wrap">
          {search.map((apod) => (
            <Console
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFav={apodIds.includes(apod.id)}
              id={apod.id}
              title={apod.title}
              url={gif.images.original.url}
              key={apod.id}
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
    apod: state.apod,
  };
}
const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setapod,
  byDate,
  endDate,
  startDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);