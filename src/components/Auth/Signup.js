import React, { useMemo, useState } from "react";
import TourguideLight from "../Tourguide/TourguideLight";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
       Passwords Must Match
      </div>
<div className="tgUP">
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
            <div className="signMess">
              <div className="carousel-wrapper">
                <Carousel autoPlay useKeyboardArrows={true} infiniteLoop={true} interval={6500} showStatus={false} showIndicators={false} showThumbs={false} >
                  <div style={{ marginTop: "70px" }}>
                    This is your TourGuide. Please keep it with you at all times while on the site to access our amazing deals.
                  </div>
                  <div style={{ marginTop: "70px" }}>
                    This model lights up. It is solar charged but can and will power down with extensive use. Touch the gray action stripe at the top to activate the light.
                  </div>
                  <div style={{ marginTop: "70px" }}>
                    Flip the TourGuide to select which Venture you want next.
                  </div>
                  <div style={{ marginTop: "70px" }}>
                    Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.
                  </div>
                </Carousel>
              </div>
              <button
                style={{ transform: "translate(-294px, -210px)" }}
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
                      // if (!confirmError && !passError && !userError) {
                      //   navigate("/");
                      }
                    }
                  }
                }
              >GO!
              </button>
              {/* "Back to Login" button located on CardFlip.js */}

            </div>
          </div>
        </div>
      </form>
</div>
    </>
  );
};

export default Signup;
