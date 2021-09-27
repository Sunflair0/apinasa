import React, { useState } from "react";
import { setClient } from "../redux/actions";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import * as AiIcons from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";

const Signup = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);

  return (
    <>
<div style={{backgroundImage: "url(./assets/stars.png)", zIndex: "-100", height: "100%"}}>
<div style={{backgroundImage: "url(./assets/twink.png)", zIndex: "-90",  animation: "twink 800s linear infinite"}}>

      <h2 className="logintop">Signup</h2>
      <div className="spacer">
        <form className="tourguide" style={{marginTop: "300px"}}>
          <div className="stripeGroup"></div>
          <div className="stripe">
            <label id="space" htmlFor="clienttag"></label>
            <div className="namepass">

              <input
                id="clienttag"
                placeholder="SpaceTours Handle"
                onChange={(e) => setClienttag(e.target.value)}
                value={clienttag}
              />
              <div className="bulb"><AiIcons.AiOutlineBulb /></div>

              <label id="space" htmlFor="password"></label>
              <input placeholder="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="outerS">
              <div className="signMess">
                <div className="carousel-wrapper">
                  <Carousel autoPlay useKeyboardArrows={true} infiniteLoop={true} interval={6500} showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} >
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
                className="btnGroup"
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
                    // console.log("res",res)
                    if (res.error) {
                      return setError(res.error)

                    } else {
                      setClient(clienttag);
                    }
                  }
                }}
              >GO
              </button>
              <div className="btnGroup">
              </div>
            </div>
            <div className="modelNum">TourGuide 2.1M31-7 LU</div>
          </div>
        </form>
      </div>
      <div className="circle16" title="Blackhole"></div>
      <div className="comet" title="comet"></div>
   
      <div>{error}</div>
</div>
</div>
    </>
  );
};

function mapStateToProps(state) {
  return {};
};
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
