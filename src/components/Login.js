import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: loginCall } = useFetch("POST");
  const [error, setError] = useState(null)


  return (
    <>
      <div className="shell">
        <div className="circle15" title="Sun/Sol"></div>
        <div className="therest">
          <div className="logintop">Welcome to SpaceTours</div>

          <form className="loginform">
<div className="Form">
            <label htmlFor="clienttag" ></label>
            <div id="space"> <input placeholder="Name"
              id="clienttag"
              onChange={(e) => setClienttag(e.target.value)}
              value={clienttag}
            /></div>
            <label htmlFor="password" ></label>
            <div id="space"><input placeholder="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            /></div>
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
                  let res = await loginCall("/api/clients/login", {
                    clienttag,
                    password,
                  });
                  if (res.error) {
                    return setError(res.error);
                  }
                  console.log(res);
                }
              }}>
              ENTER
            </button>
            <Link className="sign" to="/signup"><button type="button">Sign Up!</button></Link>
          </div></form>

          <div>{error}</div>
        </div> </div>
       <div className="circle5" title="Mercury"></div>

<div className="earthmoon">
          <div className="circle" title="Earth"></div>
        <div className="circle7" title="Moon/Luna"></div></div>
 
          <div className="circle1" title="Pluto"></div>
          <div className="circle2" title="Ganymede"></div>
          <div className="circle3" title="Mars"></div>
          <div className="circle4" title="Callisto"></div>
         
          <div className="circle6" title="Mimas"></div>
          <div className="circle8" title="Titan"></div>


          <div className="circle9" title="Uranus"></div>
          <div className="circle10" title="Ariel"></div>
          <div className="circle11" title="Titania"></div>
          <div className="circle12" title="Umbriel"></div>
          <div className="circle13" title="Oberon"></div>
          <div className="circle14" title="comet"></div>



 </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { setClient, };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
