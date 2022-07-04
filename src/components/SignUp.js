import React, { useState } from "react";
import { setClient } from "../redux/actions";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import TourGuideLight from "./TourGuideLight";
import { Carousel } from "react-responsive-carousel";

const Signup = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState("");

  return (
    <>
      <form className="tourguide">
        <div className="stripe">
          <div className="namepass">
            <label htmlFor="clienttag"></label>
            <div className="opposite"><TourGuideLight /></div>
            <div className="flip">
              <input
                placeholder="SpaceTours Handle"
                id="clienttag"
                onChange={(e) => { setClienttag(e.target.value); }}
                value={clienttag} />

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
              style={{ transform: "translate(-225px, 10px)" }}
              onClick={async (e) => {
                e.preventDefault();
                if (
                  clienttag.length > 4 &&
                  password.length > 4 &&
                  clienttag.length <= 20 &&
                  password.length <= 20
                ) {
                  setError("");
                  let res = await signupCall("/api/clients/signup", {
                    clienttag,
                    password,
                  });
                  if (res.error) {
                    return setError(res.error)

                  } else {
                    setClient(clienttag);
                  }
                }
              }
              }
            >GO
            </button>
          </div>
        </div>
      </form>
      <div >{error}</div>
      {/* className="errorMessage" */}
    </>
  );
};

function mapStateToProps(state) {
  return {};
};
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
