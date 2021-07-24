import React, { useEffect, useState, useMemo } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite, setSearch } from "../redux/actions";
const baseUrl ="https://api.nasa.gov/planetary/apod?api_key=D8IXnLxb35Z9djMqZXoghWbJqdB9J2acQe22JwT7";

const Search =({
addFavorite, 
deleteFavorite, 
search, 
setSearch,
clienttag,
favorites


}) => {

const [query, setQuery]= useState("");
const [byDate, setByDate]=useState("");
const [endDate, setEndDate]=useState("");
const [startDate, setStartDate]=useState("");
const {data, loading, error} = useFetch(query);
const apodIds = useMemo(()=>{
return favorites.map((val)=> val.id);
}, [favorites]);

useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data, setSearch]);

  return (
    <div>
      <div className="headtitle">Astronomy Picture of the Day
</div>
<form>
<div className="menubox">
          <label htmlFor="search"><h3>Gimme Picture of the Day</h3>!</label>
          <input
            id="search"
            value={byDate}
            onChange={(e) => setByDate(e.target.value)}
            placeholder="Picture of the Day"
          />
        </div>
<button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&date=${byDate}`);
}}> Gimmie a Pod!
        </button>
<div className="menubox">
    <h3> Gimmie a Range!</h3>
        <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&start_date==${startDate}`);
          }}
        >Start Date</input> 
 <input
            id="search"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start"
          />
            <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&end_date=${endDate}`);
          }}
        >End Date
        </input>

 <input
            id="search"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Picture of the Day"
          />
        </div>
      <div className="menubox">
      <div> <h3> Gimmie Five!</h3>
      <input type="button"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&count=5`);
          }}
        >5</input>
      </div></div>
    </form>
      {loading && <div className="text-center">Loading APODs</div>}
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
              url={apod.images.original.url}
              description={apod.description}
              copyright ={apod.copyright}        
key={apod.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    favorites: state.favorites,
    search: state.search,
    byDate: state.byDate,
    startDate: state.byStartDate,
    endDate: state.byEndDate
  };
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearch,
  setByDate,
  setStartDate,
  setEndDate


};

export default connect(mapStateToProps, mapDispatchToProps)(Search);