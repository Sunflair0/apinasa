import React, { useState } from "react";

const Login = ({ setLoggedInUser }) => {
  const [client, setClient] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2 className="center"></h2>
      <form className="form">
        <div className="presenter">
          <label htmlFor="client">Client Sign In</label>
          <input
            id="client"
            onChange={(e) => setClient(e.target.value)}
            value={client}
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
            if (client.length > 4 && password.length > 4) {
              setLoggedInClient(client);
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
