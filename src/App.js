import React from "react";
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

import Splash from "./components/Splash";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Form from "./components/Form";
import ApodConsole from "./components/ApodConsole";
import ApodToday from "./components/ApodToday";
import ApodRange from "./components/ApodRange";
import ApodGimme5 from "./components/ApodGimme5";
import ApodChoose from "./components/ApodChoose";
import Mer from "./components/Mer";
import Earth from "./components/Earth";
import Search from "./components/Search";
import BuyVent from "./components/BuyVent";
import BigCube from "./components/BigCube";
import Album from "./components/Album";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";
import TourGuide from "./components/TourGuide"
import TourIns from "./components/TourIns"
import Ipn from "./components/Ipn"
import TourInfo from "./components/TourInfo"
import VentureTour from "./components/VentureTour"
import VentConsole2 from "./components/VentConsole2"

function App({ clienttag, clearBigCube, clearForm, clearApod, clearSearch, clearAlbum, clearClient, clearContactUs, clearBuyVent }
) {
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

            <div className="menu1">
              <ul className="menu1item">
                <li> <NavLink activeClassName="active" className=" menu1items" to="/splash">
                  HOME{" "}
                </NavLink></li>

                <li> <NavLink activeClassName="active" className=" menu1items" to="/tourinfo"
                > Tour Info{" "}
                </NavLink></li>

                <li>   <NavLink activeClassName="active" className=" menu1items" to="/form">
                  Tour Order Form{" "}
                </NavLink></li>

                <li> <NavLink activeClassName="active" className="menu1items" to="/apodconsole">
                  APOD CONSOLE {" "}
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

                <li> <NavLink activeClassName="active" className="menu1items" to="/form">
                  Contact Us{" "}
                </NavLink></li>

                <li> <NavLink activeClassName="active" className="menu1items" to="/tourins">
                  Tour{" "}
                </NavLink></li>

                <li> <NavLink activeClassName="active" className="menu1items" to="/venturetour">
                  VentureTour{" "}
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

                <li> <NavLink activeClassName="active" className="menu1items" to="/venturetour2">
                  VentureTour2{" "}
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
          )}
        </nav></div>

      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />

          <ProtectedRoute path="/signup" reqUser={false} component={Signup} />

          <ProtectedRoute path="/splash" reqUser={true} component={Splash} />

          <ProtectedRoute path="/form" reqUser={true} component={Form} />

          <ProtectedRoute path="/apodconsole" reqUser={true} component={ApodConsole} />

          <ProtectedRoute path="/apodtoday" reqUser={true} component={ApodToday} />

          <ProtectedRoute path="/apodrange" reqUser={true} component={ApodRange} />

          <ProtectedRoute path="/apodgimme5" reqUser={true} component={ApodGimme5} />

          <ProtectedRoute path="/apodchoose" reqUser={true} component={ApodChoose} />

          <ProtectedRoute path="/mer" reqUser={true} component={Mer} />

          <ProtectedRoute path="/earth" reqUser={true} component={Earth} />

          <ProtectedRoute path="/search" reqUser={true} component={Search} />

          <ProtectedRoute path="/album" reqUser={true} component={Album} />

          <ProtectedRoute path="/bigcube" reqUser={true} component={BigCube} />

          <ProtectedRoute path="/tourguide" reqUser={true} component={TourGuide} />

          <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

          <ProtectedRoute path="/tourins" reqUser={true} component={TourIns} />

          <ProtectedRoute path="/ipn" reqUser={true} component={Ipn} />

          <ProtectedRoute path="/buyvent" reqUser={true} component={BuyVent} />

          <ProtectedRoute path="/venturetour" reqUser={true} component={VentureTour} />

          <ProtectedRoute path="/ventconsole2" reqUser={true} component={VentConsole2} />

          <ProtectedRoute path="/contactus" component={ContactUs} />

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
