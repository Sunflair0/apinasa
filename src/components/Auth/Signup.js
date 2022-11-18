import React, { useMemo, useState } from "react";
import TourguideLight from "../Tourguide/TourguideLight";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);
  const userError = useMemo(
    () => username.length < 2 || username.length > 20,
    [username]
  );
  const passError = useMemo(
    () => password.length < 6 || password.length > 30,
    [password]
  );
  const confirmError = useMemo(
    () => confirmPassword !== password || passError,
    [confirmPassword, password, passError]
  );

  return (
    <>



      <form className="tourguide sunburn ">
        <div className="stripe">
          <div className="opposite"><TourguideLight /></div>
          <div className="flip_inputs">
            <div className="namepass">

              <input
                required
                title="Between 2 and 20 characters"
                type="text"
                pattern="{2,20}"
                placeholder="SpaceTours Handle"
                id="username"
                onChange={(e) => { setUsername(e.target.value); }}
                value={username} />

              <input
                required
                title="Between 6 and 30 characters"
                type="password"
                pattern="{6,30}"
                placeholder="Password"
                id="password"
                onChange={(e) => { setPassword(e.target.value); }}
                value={password}
              />

              <input
                required
                title="Password entries must match"
                type="password"
                placeholder="Confirm Password"
                id="confirm"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="outerS">
            <div className="signupMess">
              <div
                id="userHelp"
                className={userError ? "errorMessage " : "noMessage"}
              >
                Handle: between 4 and 20 characters
              </div>

              <div
                id="passwordHelp"
                className={passError ? "errorMessage " : "noMessage"}
              >
                Password: between 6 and 30 characters
              </div>

              <div
                id="userHelp"
                className={confirmError ? "errorMessage " : "noMessage"}
              >
                Password check must match
              </div>
  </div>

{/* function submitNow(){if (!confirmError && !passError && !userError) return{
                <p>Press Submit to create account</p>
              };} */}
              
          
            <button
              style={{ transform: "translate(-229px, 25px)" }}
              disabled={confirmError || passError || userError}
              onClick={async (e) => {
                e.preventDefault();
                if (
                  username.length > 2 &&
                  password.length > 6 &&
                  username.length < 20 &&
                  password.length < 30
                ) {
                  userError(null);
                  let res = await ("/api/users/signup", {
                    username,
                    password,
                  });
                  if (res.error) {
                    return userError(res.error)
                    if (!confirmError && !passError && !userError && !apiError) {
                      navigate("/")
                    };
                  }
                }
              }
              }
            >Submit
            </button>
            {/* "Back to Login" button located on CardFlip.js */}
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
