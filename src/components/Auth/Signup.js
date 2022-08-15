import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourguideLight from "../Tourguide/TourguideLight";
import { Carousel } from "react-responsive-carousel";
// import useAPI from "../shared/hooks/useAPI";

function Signup() { 
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passError = useMemo(
    () => password.length < 8 || password.length > 30,
    [password]
  );
  const userError = useMemo(
    () => username.length < 4 || username.length > 20,
    [username]
  );
  const confirmError = useMemo(
    () => confirmPassword !== password || passError,
    [confirmPassword, password, passError]
  );

  return (
    <>
      <form className="tourguide sunburn">
        <div className="stripe">          
          <div className="opposite"><TourguideLight /></div>
          <div className="flip_inputs">
            <div className="namepass">
              <label htmlFor="username"></label>
              <input
                placeholder="SpaceTours Handle"
                id="username"
                onChange={(e) => { setUsername(e.target.value); }}
                value={username} />

              <label htmlFor="password"></label>
              <input placeholder="Password"
                type="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value); }}
                value={password}
              /></div>
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
            </div>
            <button
              style={{ transform: "translate(-228px, 10px)" }}
              onClick={async (e) => {
                e.preventDefault();
                if (
                  username.length > 4 &&
                  password.length > 4 &&
                  username.length <= 20 &&
                  password.length <= 20
                ) {
                  userError(null);
                  let res = await ("/api/users/signup", {
                    username,
                    password,
                  });
                  if (res.error) {
                    return userError(res.error)
  // if (!confirmError && !passError && !userError) {
  //             navigate("/");

                  }
                }
              }
              }
            >GO
            </button>
          </div>
        </div>
      </form>
      {/* <div >{error}</div> */}
      {/* className="errorMessage" */}
    </>
  );
};

export default Signup;
