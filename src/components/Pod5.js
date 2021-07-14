import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";


function Pod5(){
    const [pod5, setPod5] = useState("");

    <div> <h3> Gimmie Five!</h3>
    <input type="button"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          setQuery(`&count=5`);
        }}
      ></input>
    </div>

}

function mapStateToProps(state) {
    return {
      
      pod5: state.pod5,
    };
  }
  const mapDispatchToProps = {

        setPod5,
  };
export default connect(mapStateToProps, mapDispatchToProps) (Pod5);