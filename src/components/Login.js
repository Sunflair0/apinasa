import React, { useState } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import useFetch from "../hooks/useFetch";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
const { callAPI: loginCall } = useFetch("POST");

  return (
    <>
      <div  >
        <div className="shell">
<div>

      
        <div className="logintop">Welcome to SpaceTours</div>
        <div className="circle15" title="Sun/Sol">
        <div className="circle5" title="Mercury"></div>
        <div className="circle" title="Earth">
        <div className="circle7" title="Moon/Luna"></div></div>
        <div className="circle3" title="Mars"></div>
        
        <div className="circle9" title="Uranus">
            <div className="circle17" title="Miranda"></div>
            <div className="circle10" title="Ariel"></div>
            <div className="circle11" title="Titania"></div>
            <div className="circle12" title="Umbriel"></div>
            <div className="circle13" title="Oberon"></div>
      </div>
 
       <div className="circle6" title="Mimas"></div>
       <div className="circle8" title="Titan"></div>

        <div className="circle1" title="Pluto"></div>
        <div className="circle2" title="Ganymede"></div>
        <div className="circle4" title="Callisto"></div>
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

            <div className="therest">
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
                      onClick={async (e) => {
                        e.preventDefault();
                        if (
                          clienttag.length > 4 &&
                          password.length > 4 &&
                          clienttag.length <= 20 &&
                          password.length <= 20
                        ) {
                          setError(null);
                          let res = await loginCall("/api/clients/login", {
                            clienttag,
                            password,
                          });
                          if (res.error) {
                            return setError(res.error);

        </div>
</div>
            <div className="circle14" title="comet"></div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {};
};
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Login);