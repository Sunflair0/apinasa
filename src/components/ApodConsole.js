import React, { useState } from 'react';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';

 const ApodConsole = () => {
  const apodOptions = ["today", "choose", "gimme5", "range"];
  const [selection, setSelection]=useState("")
  
  return (
    <>
      <div className=" banner ">
        <h4 className="">Explore the universe and add to your personal album.</h4>
<div className="content">
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
              backgroundImage: "url(./assets/today.png)" }}
              onClick={()=> setSelection(selection)}
              >
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
            backgroundImage: "url(./assets/choose.png)" }}
            onClick={()=> setSelection(selection)}
            >
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
          backgroundImage: "url(./assets/gimme.png)" }} 
          onClick={()=> setSelection(selection)}
          >
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
            
            {selection.toLocaleLowerCase()}
        </button>
</div>
      
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