import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import ProtectedRoute from "./shared/ProtectedRoute";
import Search from "./components/Search";
import Form from "./components/Form";
import TourInfo from "./components/TourInfo";
import SatView from "./components/SatView";
import WorldWeather from "./component/WorldWeather";
import AsterTrack from "./component/AsterTrack";

function App({
  client,
  clearFavorites,
  clearSearch,
  clearClient,
  ClearForm,
  ClearAsterTrack,
  clearWorldWeather,
  clearSatView,
}) {
  return (
    <Router>
      <nav className="presenter">
        {!client && (
          <NavLink activeClassName="active" className="presenter" to="/login">
            Login
          </NavLink>
        )}
        {client && (
          <>
            <NavLink
              activeClassName="active"
              className="presenter"
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              activeClassName="active"
              className="presenter"
              to="/favorites"
            >
              Favorites
            </NavLink>

            <NavLink
              activeClassName="active"
              className="presenter"
              to="/astertrack"
            >
              Asteroid Tracker
            </NavLink>

            <NavLink
              activeClassName="active"
              className="presenter"
              to="/satview"
            >
              Satellite View
            </NavLink>

            <NavLink
              activeClassName="active"
              className="presenter"
              to="/worldweather"
            >
              World Weather
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/form">
              Contact Us
            </NavLink>

            <NavLink
              className="presenter"
              to="/login"
              onClick={() => {
                clearFavorites();
                clearSearch();
                clearForm();
                clearAsterTrack();
                clearWorldWeather();
                clearSatView();
                clearClient();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          <ProtectedRoute path="/search" reqUser={true} component={Search} />
          <ProtectedRoute
            path="/favorites"
            reqUser={true}
            component={Favorites}
          />
          <ProtectedRoute
            path="/astertrack"
            reqUser={true}
            component={AsterTrack}
          />
          <ProtectedRoute path="/satview" reqUser={true} component={SatView} />
          <ProtectedRoute
            path="/worldweather"
            reqUser={true}
            component={WorldWeather}
          />
          <ProtectedRoute path="/form" reqUser={false} component={Form} />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return { client: state.user.client };
}
const mapDispatchToProps = {
  clearFavorites,
  clearClient,
  clearSearch,
  clearFavorites,
  clearForm,
  clearSatView,
  clearWorldWeather,
  ClearAsterTrack,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
