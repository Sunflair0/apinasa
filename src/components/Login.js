import React, { useState } from "react";

const Login = ({ setLoggedInClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2 className="center"></h2>
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
          onClick={(e) => {
            if (clienttag.length > 4 && password.length > 4) {
              setClient(clientag);
            }
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
