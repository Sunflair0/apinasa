import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
const {callAPI: loginCall} = useFetch("POST");
const [error, setError]=useState(null)


  return (
    <>

      <div className="logintop">Welcome to SpaceTours</div>

      <form className="loginform">
        
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
          }}

        >
          Login
        </button>

<Link className="btn" to="/signup">Create Account</Link>
      </form>
<div className="circle"></div>
<div className="circle1"></div>
<div className="circle2"></div>
<div className="circle3"></div>
<div className="circle4"></div>
<div className="circle5"></div>
<div className="circle6"></div>
<div className="circle7"></div>
<div className="circle8"></div>
<div className="circle9"></div>
<div className="circle10"></div>
<div className="circle11"></div>
<div className="circle12"></div>
<div className="circle13"></div>
<div className="circle14"></div>
<div className="circle15"></div>
<div>{error}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { setClient,};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
