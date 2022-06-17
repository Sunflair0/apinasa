import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";


export default function Cardflip() {
   

    return (
        <>
        <div className="shell">        

        <div ><Login /></div>
        <div ><SignUp /></div>

          
            {/* <div className="logintop">Welcome to SpaceTours</div> */}
             <div className="circle15" title="Sun/Sol"></div>
             <div className="comet" title="comet"></div>
              <div className="circle5" title="Mercury"></div>
              <div className="circle3" title="Mars"></div>
              <div className="circle9" title="Uranus">
                <div className="circle17" title="Miranda"></div>
                <div className="circle10" title="Ariel"></div>
                <div className="circle11" title="Titania"></div>
                <div className="circle12" title="Umbriel"></div>
                <div className="circle13" title="Oberon"></div>
              </div>
           
          
          
          </div>
          </>
    );    
};