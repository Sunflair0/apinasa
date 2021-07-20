import React, { useEffect, useState, useMemo } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite, setSearch } from "../redux/actions";

const Search =({
startDate, 
endDate, 
byDate, 
apod, 
setApod,
addFavorite, 
deleteFavorite, 
search, 
setSearch 

}) => {

const [query, setQuery]= useState("")};
const [apod, setApod]=useState("");
const {data, loading, error} = useFetch(query);
const apodId = useMemo(()=>{
return favorites.map((val)=> val.id);
}, [favorites]);

useEffect (()=> {
if (data){
setSearch(data.data)}})

 return (

    <div>
      <div className="headtitle">Astronomy Picture of the Day
</div>
<div className="menubox">
          <label htmlFor="search">Gimme Picture of the Day!</label>
          <input
            id="search"
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
description={description}
      copyright ={copyright}        
key={apod.id}
            />
          ))}
        </div>
      )}
    </div>
  );

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