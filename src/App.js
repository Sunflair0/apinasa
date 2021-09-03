import React, { useState } from "react";
import { connect } from "react-redux";
import {
  clearForm, clearApod, clearSearch, clearAlbum, clearClient, clearContactUs,
  clearBigCube, clearBuyVent,
} from "./redux/actions";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./shared/ProtectedRoute";
import Album from "./components/Album";
import ApodToday from "./components/ApodToday";
import ApodConsole from "./components/ApodConsole";
import ApodRange from "./components/ApodRange";
import BigCube from "./components/BigCube";
import BuyVent from "./components/BuyVent";
import ApodChoose from "./components/ApodChoose";
import ContactUs from "./components/ContactUs";
import Earth from "./components/Earth";
import Form from "./components/Form";
import ApodGimme5 from "./components/ApodGimme5";
import Ipn from "./components/Ipn"
import Login from "./components/Login";
import Mer from "./components/Mer";
import Search from "./components/Search";
import Signup from "./components/SignUp";
import Splash from "./components/Splash";
import Tour from "./components/Navbar"
import TourGuide from "./components/TourGuide"
import TourInfo from "./components/TourInfo"
import TourIns from "./components/TourIns"
import VentConsole from "./components/VentConsole"
import VentureTour from "./components/VentureTour"
import Navbar from "./components/Navbar";



function App({ clienttag, clearBigCube, clearForm, clearApod, clearSearch, clearAlbum, clearClient, clearContactUs, clearBuyVent }
) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Router>
      <div className="navDiv">

        <nav style={{ maxWidth: "300px" }}>
          {" "}
          {!clienttag && (
            <NavLink activeClassName="active" className="menuitem" to="/login">
              {" "}
            </NavLink>
          )}{" "}
          <NavLink activeClassName="active" className="presenter" to="/signup"
          ></NavLink>
          {clienttag && (
            <><Navbar />

              <div className="menu1">
                <ul className="menu1item">
                  <li> <NavLink activeClassName="active" className=" menu1items" to="/splash">
                    HOME{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className=" menu1items" to="/tourinfo"
                  > Tour Info{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className=" menu1items" to="/form">
                    Form{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/apodconsole">
                    APOD console {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/apodtoday">
                    Today {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/apodchoose">
                    Choose
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/apodgimme5">
                    Gimme 5 {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/apodrange">
                    Range {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/mer">
                    MER {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/earth">
                    Earth {" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className=" menu1items" to="/search">
                    Search{" "}
                  </NavLink></li>

                  <li><NavLink activeClassName="active" className="menu1items" to="/album">
                    Album{" "} </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/contactus">
                    Contact Us{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/tour">
                    Tour{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/tourins">
                    TourIns{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/ipn">
                    IPN{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/tourguide">
                    TourGuide{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/venturetour">
                    VentureTour{" "}
                  </NavLink></li>

                  <li> <NavLink activeClassName="active" className="menu1items" to="/ventconsole">
                    VentConsole{" "}
                  </NavLink></li>

                  <li> <NavLink
                    className="menu1items"
                    to="/login"
                    onClick={() => {
                      clearApod();
                      clearBigCube();
                      clearBuyVent();
                      clearClient()
                      clearContactUs();
                      clearAlbum();
                      clearForm();
                      clearSearch();
                    }}
                  >
                    Logout
                  </NavLink></li>

                </ul></div>
            </>
          )}
        </nav></div>

      <main>
        <Switch>






          <ProtectedRoute path="/album" reqUser={true} component={Album} />

          <ProtectedRoute path="/apodconsole" reqUser={true} component={ApodConsole} />

          <ProtectedRoute path="/bigcube" reqUser={true} component={BigCube} />

          <ProtectedRoute path="/buyvent" reqUser={true} component={BuyVent} />

          <ProtectedRoute path="/apodchoose" reqUser={true} component={ApodChoose} />

          <ProtectedRoute path="/apodrange" reqUser={true} component={ApodRange} />

          <ProtectedRoute path="/apodtoday" reqUser={true} component={ApodToday} />

          <ProtectedRoute path="/contactus" reqUser={true} component={ContactUs} />

          <ProtectedRoute path="/earth" reqUser={true} component={Earth} />

          <ProtectedRoute path="/form" reqUser={true} component={Form} />

          <ProtectedRoute path="/apodgimme5" reqUser={true} component={ApodGimme5} />

          <ProtectedRoute path="/ipn" reqUser={true} component={Ipn} />

          <ProtectedRoute path="/login" reqUser={false} component={Login} />

          <ProtectedRoute path="/mer" reqUser={true} component={Mer} />

          <ProtectedRoute path="/search" reqUser={true} component={Search} />

          <ProtectedRoute path="/signup" reqUser={false} component={Signup} />

          <ProtectedRoute path="/splash" reqUser={true} component={Splash} />

          <ProtectedRoute path="/tour" reqUser={true} component={Tour} />

          <ProtectedRoute path="/tourguide" reqUser={true} component={TourGuide} />

          <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

          <ProtectedRoute path="/tourins" reqUser={true} component={TourIns} />

          <ProtectedRoute path="/ventconsole" reqUser={true} component={VentConsole} />

          <ProtectedRoute path="/venturetour" reqUser={true} component={VentureTour} />



          <Route path="*">

            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return { clienttag: state.client.clienttag };
}

const mapDispatchToProps = {
  clearForm,
  clearApod,
  clearSearch,
  clearAlbum,
  clearClient,
  clearContactUs,
  clearBigCube,
  clearBuyVent,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
