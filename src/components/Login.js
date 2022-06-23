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
        <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
          <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 800s linear infinite" }}>


            <div id="logintop">Welcome to SpaceTours</div>
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