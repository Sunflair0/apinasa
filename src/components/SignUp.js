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
      <h2 className="text-center">Signup</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="clienttag">clienttag</label>
          <input
            id="clienttag"
            onChange={(e) => setclienttag(e.target.value)}
            value={clienttag}
          />
        </div>
        <div className="form-field flex-wrap">
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
