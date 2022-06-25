import React, { useState } from "react";
import Background from './Background'
import Login from './Login'
import SignUp from './SignUp'

export default function LoginPage() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <>
            {/* <div className='logintop'></div> */}

            <div><Background /></div>
            
                <div className='card'>
                    <div className="tourguide">

                        <div className={isFlipped ? "toggle_flip" : "toggle_flop"}>
                            <Login />
                            
                                <button className="btnGroup tgButton loc2 " onClick={handleToggle}>Sign Up!</button>
                                
<div className="signmore">
                                <div className='card_back  '>
                                   
                                <SignUp />
                                
                                <button className="btnGroup tgButton loc" onClick={handleToggle}>To Login</button>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}
