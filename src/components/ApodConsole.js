import React, { useState } from 'react';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';

 const ApodConsole = () => {
  const apodOptions = ["today", "choose", "gimme5", "range"];
  const [selection, setSelection]=useState("today")
  
  return (
    <>
      <div className=" banner ">
        <h4 className="content">Explore the universe and add to your personal album.</h4>

        <button
         type="button"
          style={{ 
            height: "120px",
            width: "100px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginRight: "5em",
            transition: ".3s ease all",
              backgroundImage: "url(./assets/today.png)" }}>
        </button>

        <button
          type="button"
          style={{ height: "120px",
          width: "100px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginRight: "5em",
          transition: ".3s ease all",
            backgroundImage: "url(./assets/choose.png)" }}>
        </button>

        <button
          type="button"
          style={{height: "120px",
          width: "100px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginRight: "5em",
          transition: ".3s ease all", 
          backgroundImage: "url(./assets/gimme.png)" }} >
        </button>

        <button
         type="button"
          style={{height: "120px",
          width: "100px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginRight: "5em",
          transition: ".3s ease all",
           backgroundImage: "url(./assets/range.png)" }}
          onClick={()=> setSelection(selection)}
          >
            
            {selection.toLowerCase()}
        </button>

      
      <p>{selection}</p>
      <p>{apodOptions === "today" && <ApodToday/>}</p>
      <p>{apodOptions === "choose" && <ApodChoose/>}</p>
      <p>{apodOptions === "gimme" && <ApodGimme5/>}</p>
      <p>{apodOptions === "range" && <ApodRange/>}</p>
      
      </div>
    </>
  )
  }
  export default ApodConsole;