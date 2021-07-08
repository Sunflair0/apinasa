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
import WorldWeather from "./components/WorldWeather";
import AsterTrack from "./components/AsterTrack";
import { TourMenu } from "./components/tourinfoMenu/TourMenu";

function App({
  client,
  clearFavorites,
  clearSearch,
  clearClient,
  clearForm,
  clearAsterTrack,
  clearWorldWeather,
  clearSatView,
}) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}
