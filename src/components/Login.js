import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="shell">
        <div style={{ backgroundImage: "url(./assets/stars.png)", zIndex: "-100" }}>
          <div style={{ backgroundImage: "url(./assets/twink.png)", zIndex: "-90", animation: "twink 800s linear infinite" }}>


            <div className="logintop">Welcome to SpaceTours</div>
            {/* <svg width="300" height="77" xmlns="http://www.w3.org/2000/svg" xmlnsXsvg="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
 <g class="layer">
  <title>Layer 1</title>
  <g fill="#ee5832" id="svg_1" transform="translate(0.000000,77.000000) scale(0.100000,-0.100000)">
   <path d="m2869,646c-2,-2 -62,-6 -133,-10c-71,-4 -132,-9 -135,-10c-3,-2 -40,-7 -81,-10c-183,-16 -286,-29 -301,-37c-9,-4 -19,-6 -21,-3c-8,7 -273,-32 -477,-72c-204,-39 -595,-129 -614,-141c-6,-4 -18,-8 -27,-8c-33,-3 -190,-50 -190,-58c0,-4 -4,-6 -9,-3c-5,4 -22,1 -38,-6c-15,-6 -30,-12 -33,-12c-45,-10 -100,-31 -100,-38c0,-5 -4,-7 -8,-4c-15,9 -419,-146 -527,-202c-55,-28 -57,-31 -29,-32c16,0 34,4 40,8c5,5 41,21 79,37c39,15 79,31 90,36c20,9 76,31 85,34c3,1 19,7 35,14c34,15 104,40 245,87c8,3 16,5 18,4c1,0 16,7 32,15c17,9 35,13 40,10c6,-3 10,-2 10,2c0,13 134,55 220,69c14,2 43,11 65,18c22,8 78,24 125,36c47,12 110,27 140,35c30,8 93,21 138,29c46,9 87,18 91,20c7,5 102,23 171,32c19,3 42,7 50,10c8,3 37,7 65,10c27,3 57,8 65,11c8,3 40,7 70,10c30,2 69,8 86,14c18,5 36,9 40,8c5,-1 25,1 44,4c61,12 87,15 172,23c56,5 76,10 63,15c-17,6 -16,8 8,8c16,1 26,-3 22,-9c-3,-5 0,-8 7,-6c20,7 375,35 446,36c20,0 31,4 27,10c-3,6 -2,10 4,10c5,0 13,-4 16,-10c10,-16 45,-12 45,5c0,12 -14,15 -63,15c-35,0 -66,-2 -68,-4z" id="svg_2"/>
  </g>
 </g>

</svg> */}

      <div className="circle15" title="Sun/Sol"></div>
              <div className="circle5" title="Mercury"></div>
              <div className="circle3" title="Mars"></div>
              <div className="circle9" title="Uranus">
                <div className="circle17" title="Miranda"></div>
                <div className="circle10" title="Ariel"></div>
                <div className="circle11" title="Titania"></div>
                <div className="circle12" title="Umbriel"></div>
                <div className="circle13" title="Oberon"></div>
              </div>
              <div className="circle14" title="comet"></div>
            </div>
          </div>
          <form className="tourguide">
            <div className="stripe">
              <label htmlFor="clienttag"></label>
              <div className="bulb"><AiIcons.AiOutlineBulb /></div>
              <div id="space">
                <input
                  placeholder="Name"
                  id="clienttag"
                  onChange={(e) => setClienttag(e.target.value)}
                  value={clienttag} /></div>
              <label htmlFor="password" >

              </label>
              <div id="space"><input placeholder="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              /></div>
              <div className="outerS"><div className="gmessage">Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.</div>
                <button
                  className="btnGroup"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      clienttag.length > 4 &&
                      password.length > 4 &&
                      clienttag.length <= 20 &&
                      password.length <= 20
                    ) {
                      setClient(clienttag);
                    }
                  }}>
                  GO
                </button>

              </div><div className="outerS"><div className="smessage">If  you have not had the opportunity to create an account, please sign up before entering the site.</div>
                <Link className=" btnGroup" to="/signup"><button type="button">Sign Up!</button></Link>
              </div><div className="modelNum">TourGuide 2.1M31-7 LU</div></div></form>

        </div>
      
    </>
  );
};

function mapStateToProps(state) {
  return {};
};
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Login);