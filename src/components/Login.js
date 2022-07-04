import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import TourGuideLight from "./TourGuideLight";

const Login = ({ setClient }) => {
  const [clienttag, setClienttag] = useState("");
  const [password, setPassword] = useState("");
  const {callAPI: loginCall } = useFetch("POST");
  const [error, setError] = useState(false);


  return (
    <>
      <form className="tourguide">
        <div className="stripe">
          <div className="namepass">
            <label htmlFor="clienttag"></label>
            <TourGuideLight />
            <input
              placeholder="SpaceTours Handle"
              id="clienttag"
              onChange={(e) => setClienttag(e.target.value)}
              value={clienttag} />
            <label htmlFor="password"></label>
            <input placeholder="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            /></div>
          <div className="outerS">
            <div className="gmessage">Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.</div>
            <button
              style={{ transform: "translateX(6px)" }}
              className="btnGroup"
              onClick={async (e) => {
                e.preventDefault();
                if (
                  clienttag.length > 4 &&
                  password.length > 4 &&
                  clienttag.length <= 20 &&
                  password.length <= 20
                ) {
                  setError("");
                  let res = await loginCall("/api/clients/login", {
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
              }>
              GO
            </button>
          </div>
          <div className="outerS">
            <div className="smessage">If  you have not had the opportunity to create an account, please sign up before entering the site.</div>
          </div>
        </div>
      </form>
      <div >{error}</div>
    </>
  );
};

function mapStateToProps(state) {
  return {};
};
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Login);