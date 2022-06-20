import React, {} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ReactCardFlip from 'react-card-flip';


class Cardflip extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <Login>
    
            <button onClick={this.handleClick}>Click to flip</button>
          </Login>
  
          <SignUp>
            
            <button onClick={this.handleClick}>Sign</button>
          </SignUp>
        </ReactCardFlip>
      )
    }
  }

  export default (Cardflip);