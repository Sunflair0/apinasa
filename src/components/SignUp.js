import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const Signup = () => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);

  return (
    <>
      <h2 className="logintop">Signup</h2>
      <div className="spacer">
        <form className="tourguide">
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
                   <div> My Sign Up stopped working. I will get it back on track soon. In the mean time, use </div>
                    <div style={{color:"darkorange"}}> hobolife travel </div> 
                    <div> as a</div>
                    <div style={{color:"darkorange"}}> username password </div> <p>combo to enter. Thanks!</p> 
                  </div>
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
                    if (res.error) {
                      return setError(res.error);
                    }
                  }
                }}
              >Signup
              </button>
              <div className="btnGroup">
              <Link  className="sign" to="/login"><button  type="button">Login</button></Link>
            </div></div>
            <div className="modelNum">TourGuide 2.1M31-7 LU</div>
          </div>
        </form>
      </div>
      <div className="circle16" title="Blackhole"></div>
      <div className="circle3 mars2" title="Mars"></div>
      <div className="uGroup2">
        <div className="circle9" title="Uranus"></div>
        <div className="circle10" title="Ariel"></div>
        <div className="circle11" title="Titania"></div>
        <div className="circle12" title="Umbriel"></div>
        <div className="circle13" title="Oberon"></div>
      </div>
      <div>{error}</div> 
    </>
  ); 
};

export default Signup;
