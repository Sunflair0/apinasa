import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import * as AiIcons from "react-icons/ai";

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
<div className="outerS"> <div className="signMess"><ul>
<li>This is your TourGuide. Please keep it with you at all times while on the site to access our amazing deals.</li>
<li>This model lights up. It is solar charged but can and will power down with extensive use. Touch the gray action stripe at the top to activate the light.</li>
</ul></div>
        <button
          className="btn"
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

<div>{error}</div>
    </>
  );
};

export default Signup;
