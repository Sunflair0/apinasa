import React, { useEffect, useState, useMemo } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
<<<<<<< HEAD
import { addFavorite, deleteFavorite, setSearch, setByDate, setStartDate, setEndDate } from "../redux/actions";
const baseUrl ="https://api.nasa.gov/planetary/apod?api_key=D8IXnLxb35Z9djMqZXoghWbJqdB9J2acQe22JwT7";

const Search =({
=======
import { addFavorite, deleteFavorite, setSearch } from "../redux/actions";

const Search =({
startDate, 
endDate, 
byDate, 
apods, 
setApods,
>>>>>>> master
addFavorite, 
deleteFavorite, 
search, 
setSearch,
<<<<<<< HEAD
=======
description,
copyright,
>>>>>>> master
favorites


}) => {
<<<<<<< HEAD
const [query, setQuery]= useState("");
const [byDate, setByDate]=useState("");
const [endDate, setEndDate]=useState("");
const [startDate, setStartDate]=useState("");
const {data, loading, error} = useFetch(query);
const { callAPI: apodCall } = useFetch("GET");

=======

const [query, setQuery]= useState("");
const [apod, setApod]=useState("");
const {data, loading, error} = useFetch(query);
>>>>>>> master
const apodIds = useMemo(()=>{
return favorites.map((val)=> val.id);
}, [favorites]);

useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data, setSearch]);

<<<<<<< HEAD
   return (
=======
  return (
>>>>>>> master
    <div>
      <div className="headtitle">Astronomy Picture of the Day
</div>
<form>
<div className="menubox">
          <label htmlFor="search"><h3>Gimme Picture of the Day</h3>!</label>
          <input
            id="search"
<<<<<<< HEAD
            value={byDate}
            onChange={(e) => setByDate(e.target.value)}
=======
            value={apod}
            onChange={(e) => setApod(e.target.value)}
>>>>>>> master
            placeholder="Picture of the Day"
          />
        </div>
<button
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            setQuery(`&date=${byDate}`);
<<<<<<< HEAD
const res = await FETCH(baseUrl + byDate.current.value);
            
}}> Gimmie a Pod!
        </button>

=======
}}> Gimmie a Pod!
        </button>
>>>>>>> master
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
<<<<<<< HEAD


=======
>>>>>>> master
      <div> <h3> Gimmie Five!</h3>
      <input type="button"
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            setQuery(`&count=5`);
const res = await apodCall(baseUrl + `&count=5`);
            if (res.error) {
              return setError(res.error);
            }
            setSearch(res.data);
          }}
        >5</input>
      </div></div>
    </form>
<<<<<<< HEAD
      {loading && <div className="text-center">Loading APODs</div>}
=======
      {loading && <div className="text-center">Loading apods</div>}
>>>>>>> master
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
<<<<<<< HEAD
              description={apod.description}
              copyright ={apod.copyright}        
=======
          description={description}
      copyright ={copyright}        
>>>>>>> master
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
<<<<<<< HEAD
    search: state.search,
    byDate: state.byDate,
    startDate: state.byStartDate,
    endDate: state.byEndDate
=======
search: state.search,
    apod: state.apod,
>>>>>>> master
  };
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearch,
<<<<<<< HEAD
  setByDate,
  setStartDate,
  setEndDate
=======
 

>>>>>>> master
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);