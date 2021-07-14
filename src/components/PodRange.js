import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";


function PodRange(){
    const [startDate, setStartDate]= useState("");
  const [endDate, setEndDate]= useState("");

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


}

function mapStateToProps(state) {
    return {
      
    
      podRange: state.podRange,
    };
  }
  const mapDispatchToProps = {
    endDate,
    startDate,
    setPodRange,

  };

export default connect(mapStateToProps, mapDispatchToProps) (PodRange);