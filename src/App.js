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
import WorldWeather from "./WorldWeather";
import Asteroid from "./Asteroid";

export default App;
