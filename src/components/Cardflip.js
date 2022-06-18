import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ReactCardFlip from 'react-card-flip';


export default function Cardflip() {
    const [ isFlipped] =useState(false);

    <div onClick={() => (!isFlipped)}>
    {isFlipped? <SignUp /> : <Login />}
</div>


    return (
        <>
        <div className="shell">    

 {/* <ReactCardFlip isFlipped={isFlipped}flipDirection="vertical">
        <Login>
        <div className="card_login_front"></div>
        <button onClick={this.handleClick}>Sign Up!</button>
        </Login>

        <SignUp>
        <div className="card_signin_back"></div>
          <button onClick={this.handleClick}>To Login</button>
        </SignUp>
      </ReactCardFlip> */}

          
            {/* <div className="logintop">Welcome to SpaceTours</div> */}
             <div className="circle15" title="Sun/Sol"></div>
             <div className="comet" title="comet"></div>
              <div className="circle5" title="Mercury"></div>
              <div className="circle3" title="Mars"></div>
              <div className="circle9" title="Uranus">
                
                <div className="circle10" title="Ariel"></div>
                <div className="circle11" title="Titania"></div>
                <div className="circle12" title="Umbriel"></div>
                <div className="circle13" title="Oberon"></div>
              </div>
           
          
          
          </div>
          </>
    );    
};