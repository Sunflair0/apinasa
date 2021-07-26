import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Signup = () => {
  const [clienttag, setclienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);
  // const history = useHistory();
  return (
    <>
      <h2 className="logintop">Signup</h2>
      <form className="loginform">
        
          <label  id="space" htmlFor="clienttag"></label>
          <input
            id="clienttag" placeholder= "Client Name"
            onChange={(e) => setclienttag(e.target.value)}
            value={clienttag}
          />
        
        <div className="form-field flex-wrap">
          <label id="space" htmlFor="password"></label>
          <input placeholder="Password"
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
              let res = await signupCall("/api/clients/signup", {
                clienttag,
                password,
              });
              if (res.error) {
                return setError(res.error);
              }
            }
          }}
        >
          Signup
        </button>
      </form>
      <div>{error}</div>
    </>
  );
};

export default Signup;
