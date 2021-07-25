import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import useFetch from "../hooks/useFetch";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
const {callAPI: loginCall} = useFetch("POST");
const [error, setError]=useState(null)
const [login, setLogin] =useState(null)


  return (
    <>
      <div className="logintop">Welcome to SpaceTours. Please log in.</div>
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
              login(res.data.clienttag);
            }
          }}

        >
          Login
        </button>
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
