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
      <h2 className="center">Welcome!</h2>
      <form className="form">
        <div className="presenter">
          <label htmlFor="clienttag">Client Sign In</label>
          <input
            id="clienttag"
            onChange={(e) => setClienttag(e.target.value)}
            value={clienttag}
          />
        </div>
        <div className="presenter">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
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
              clienttag(res.data.clienttag);
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
const mapDispatchToProps = {
  setClient,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
