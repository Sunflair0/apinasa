import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ReactCardFlip from 'react-card-flip';


const Cardflip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <Login>
            This is the front of the card.
            <button onClick={handleClick}>Click to flip</button>
          </Login>
  
          <SignUp>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
          </SignUp>
        </ReactCardFlip>

    )
}

  export default (Cardflip);