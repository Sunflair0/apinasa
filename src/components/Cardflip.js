import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";



// export const Cardflip = () => {


//   return (
//     <>
//     <section>
//       <div className="card ">
        
//         <Login />
//         <div className="face front">
//           <div className="button"></div>
//           </div>
//           <div className="face back"></div>
//           <div className="button">boo</div>
//         </div>
      
//     </section>
   
//     <div>Cardflip</div>
//      </>
//   )
// }

import ReactCardFlip from 'react-card-flip';

const Cardflip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
 };

  return (
    
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="cards">
      
      <div >
        
        <button className="tgButton" style={{ border: "none", transform: "translate(-36px, 300px)" }} onClick={handleClick}>Sign Up!</button>
      <Login />  
      
</div>
      <div >
        <button className="tgButton" style={{ border: "none", transform: "translate(-36px, 370px)" }} onClick={handleClick}>To Login</button>
        <SignUp />
      </div>
    </ReactCardFlip>

 )
}

export default (Cardflip);