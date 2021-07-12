import React, { useEffect, useMemo, useState } from "react";
import Console from "./Console";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearch, addFavorite, deleteFavorite } from "../redux/actions";
const Pod = ({
 
 
}) => {
  const [byDate, setByDate] = useState("");
  const [query, setQuery] = useState("");
  const [startDate, setStartDate]= useState("");
  const [endDate, setEndDate]= useState("");
  const [date1, setDate1] = useState("");
  const [pod, setPod] =useState ("");
  const { data, loading, error } = useFetch(query);
  
  useEffect(() => {
    if (data) {
      setPod(data.data);
    }
  }, [data]);
  return (
    <div>
      <div className="headtitle">Astronomy Picture of the Day
</div>
      
        <div className="form-field flex-wrap">
          <label htmlFor="search">Gimme Picture of the Day!</label>
          <input
            id="search"
            value={pod}
            onChange={(e) => setPod(e.target.value)}
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
          Gimmie Pod!
        </button>
<div>
    <h3> Gimmie a Range!</h3>
        <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&start_date==${startDate}`);
          }}
        ></input> TO
            <input type="date"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(`&end_date=${endDate}`);
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
    
      {loading && <div className="text-center">Loading Pics</div>}
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
    pod: state.pod,
  };
}
const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setPod,
  byDate,
  endDate,
  startDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);