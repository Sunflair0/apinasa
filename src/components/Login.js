import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
const {callAPI: loginCall} = useFetch("POST");
const [error, setError]=useState(null)


  return (
    <>
<div className="topBar"></div>
      <div className="logintop">Welcome to SpaceTours. Please log in.</div>
<div className="circle1"></div>
<div className="circle2"></div>
<div className="circle3"></div>
<div className="circle4"></div>
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
        <div className="circle"></div>
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
              loginCall(res.data.clienttag);
            }
          }}

        >
          Login
        </button>

<button className="btn" to="/signup">Create Account</button>
      </form>
<div>{error}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { setClient,};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
