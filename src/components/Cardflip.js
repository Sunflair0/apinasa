import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ReactCardFlip from 'react-card-flip';

const Cardflip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="card">
      <div>
        <button className="tgButton" style={{ transform: "translate(25px, 300px)" }} onClick={handleClick}>Sign Up!</button>
        <Login />
      </div>
      <div>
        <button className="tgButton" style={{ transform: "translate(-205px, 370px)" }} onClick={handleClick}>To Login</button>
        <SignUp />
      </div>
    </ReactCardFlip>
  )
}

export default (Cardflip);