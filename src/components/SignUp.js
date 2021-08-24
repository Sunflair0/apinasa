import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import * as AiIcons from "react-icons/ai";
import TourGuide from "./TourGuide";
import signUpMess from "./TourGuide"

const Signup = () => {
  const [clienttag, setclienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);

  // const history = useHistory();
  return (
    <>
     
<h2 className="logintop">Signup</h2>
      <div className="spacer"><form className="loginform">
        <div className="stripeGroup">      </div>
          <div className="stripe"><label  id="space" htmlFor="clienttag"></label>
           <div className="namepass"><input
            id="clienttag" placeholder= "Client Name"
            onChange={(e) => setclienttag(e.target.value)}
            value={clienttag}
          />

        <div className="bulb"><AiIcons.AiOutlineBulb/></div>
    
        
         <label id="space" htmlFor="password"></label>
          <input placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
<div className="outerS"> <div className="signMess">
<signUpMess />
</div>
        <button
          className="btnGroup" 
          onClick={async (e) => {
            e.preventDefault();
            if (
              clienttag.length > 4 &&
              password.length > 4 &&
              clienttag.length <= 20 &&
              password.length <= 20
            ) {
              setError(null);
              let res = await signupCall("/api/clients/signup", {
                clienttag,
                password,
              });
              if (res.error) {
                return setError(res.error);
              }
            }
          }}
        >Signup
        </button>
      </div>
<div className="modelNum">TourGuide 2.1M31-7 LU</div>
 </div></form> </div>    
<div className="circle16" title="Blackhole"></div>
<div className="circle3 mars2" title="Mars"></div>
<div className="uGroup2">
          <div className="circle9" title="Uranus"></div>
          <div className="circle10" title="Ariel"></div>
          <div className="circle11" title="Titania"></div>
          <div className="circle12" title="Umbriel"></div>
          <div className="circle13" title="Oberon"></div>
</div>
<div>{error}</div>
    </>
  );
};

export default Signup;
