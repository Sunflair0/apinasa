import React from "react";
import { connect } from "react-redux";
import {
  clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs,
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
import Apod from "./components/Apod";
import Search from "./components/Search";
import BuyVent from "./components/BuyVent";
import BigCube from "./components/BigCube";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";
import TourGuide from "./components/TourGuide"
import TourIns from "./components/TourIns"
import TourInfo from "./components/TourInfo"
import VentureTour from "./components/VentureTour"
import VentConsole2 from "./components/VentConsole2"

function App({ clienttag, clearBigCube, clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs, clearBuyVent }
) {
  return (
    <Router>
      <nav style={{maxWidth: "300px"}}>
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


              <li>  <NavLink activeClassName="active" className=" menu1items" to="/tourinfo"
              > Tour Info{" "}
              </NavLink></li>

              <li>   <NavLink activeClassName="active" className=" menu1items" to="/form">
                Tour Order Form{" "}
              </NavLink></li>

              <li> <NavLink activeClassName="active" className=" menu1items" to="/apod">
                APOD {" "}
              </NavLink></li>

              <li>  <NavLink activeClassName="active" className=" menu1items" to="/search">
                Search{" "}
              </NavLink></li>

              <li><NavLink activeClassName="active" className="menu1items" to="/favorites">
                Favorites{" "} </NavLink></li>

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

              <li> <NavLink activeClassName="active" className="menu1items" to="/tourguide">
                TourGuide{" "}
              </NavLink></li>

              <li> <NavLink activeClassName="active" className="menu1items" to="/venturetour2">
                VentureTour2{" "}
              </NavLink></li>


              <li>    <NavLink
                className="menu1items
"
                to="/login"
                onClick={() => {
                  clearApod();
                  clearBigCube();
                  clearBuyVent();
                  clearClient()
                  clearContactUs();
                  clearFavorites();
                  clearForm();
                  clearSearch();
                }}
              >
                Logout
              </NavLink></li>

            </ul></div>
        )}
      </nav>

      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />

          <ProtectedRoute path="/signup" reqUser={false} component={Signup} />

          <ProtectedRoute path="/splash" reqUser={true} component={Splash} />

          <ProtectedRoute path="/form" reqUser={true} component={Form} />

          <ProtectedRoute path="/apod" reqUser={true} component={Apod} />

          <ProtectedRoute path="/search" reqUser={true} component={Search} />

          <ProtectedRoute path="/favorites" reqUser={true} component={Favorites} />

          <ProtectedRoute path="/bigcube" reqUser={true} component={BigCube} />

          <ProtectedRoute path="/tourguide" reqUser={true} component={TourGuide} />

          <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

          <ProtectedRoute path="/tourins" reqUser={true} component={TourIns} />

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
  clearFavorites,
  clearClient,
  clearContactUs,
  clearBigCube,
  clearBuyVent,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
