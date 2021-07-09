import React from "react";
import { connect } from "react-redux";
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
import Pod from "./components/Pod";
import TourIns from "./components/TourIns";

function App({
  clienttag,
  clearFavorites,
  clearSearch,
  clearClient,
  clearForm,
  clearPod,
   clearTourIns,
}) {
  return (
    <Router>
      <nav className="presenter">
        {" "}
        {!clienttag && (
          <NavLink activeClassName="active" className="presenter" to="/login">
            Login{" "}
          </NavLink>
        )}{" "}
        {clienttag && (
          <>
            <NavLink
              activeClassName="active"
              className="presenter"
              to="/tourinfo"
            >
              Tour Info(Buy Here){" "}
            </NavLink>
            <NavLink activeClassName="active" className="presenter" to="/pod">
              POD (Photo of the Day -Astronomy){" "}
              </NavLink>
                       <NavLink activeClassName="active" className="presenter" to="/ins">
              Tour Insurance{" "}
            </NavLink>
            <NavLink
              activeClassName="active"
              className="presenter"
              to="/search"
            >
              {" "}
              Search{" "}
            </NavLink>
            <NavLink
              activeClassName="active"
              className="presenter"
              to="/favorites"
            >
              Favorites{" "}
            </NavLink>
            <NavLink activeClassName="active" className="presenter" to="/form">
              Contact Us{" "}
            </NavLink>
            <NavLink
              className="presenter"
              to="/login"
              onClick={() => {
                clearFavorites();
                clearSearch();
                clearForm();
                clearTourIns();
                clearPod();f
                clearClient();
              }}
            >
              Logout{" "}
            </NavLink>{" "}
          </>
        )}{" "}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          <Route path="*">
            {" "}
            <Redirect to="/login" />
            <ProtectedRoute
              path="/tourinfo"
              reqUser={true}
              component={TourInfo}
            />
            <ProtectedRoute path="/pod" reqUser={true} component={Pod} />
                        <ProtectedRoute path="/eonet" reqUser={true} component={Eonet} />
            <ProtectedRoute
              path="/tourins"
              reqUser={true}
              component={TourIns}
            />
            <ProtectedRoute path="/search" reqUser={true} component={Search} />
            <ProtectedRoute
              path="/favorites"
              reqUser={true}
              component={Favorites}
            />
            <ProtectedRoute path="/form" reqUser={false} component={Form} />
          </Route>
        </Switch>
      </main>

      <aside>
        <Switch>
          <Route>
            <ProtectedRoute
              path="/buyventure"
              reqUser={true}
              component={BuyVenture}
            />

            <ProtectedRoute path="/sun" reqUser={true} component={Sun} />

            <ProtectedRoute
              path="/mercury"
              reqUser={true}
              component={Mercury}
            />

            <ProtectedRoute path="/earth" reqUser={true} component={Earth} />

            <ProtectedRoute path="/moon" reqUser={true} component={Moon} />

            <ProtectedRoute path="/mars" reqUser={true} component={Mars} />

            <ProtectedRoute
              path="/ganymede"
              reqUser={true}
              component={Ganymede}
            />

            <ProtectedRoute
              path="/callisto"
              reqUser={true}
              component={Callisto}
            />

            <ProtectedRoute path="/titan" reqUser={true} component={Titan} />

            <ProtectedRoute path="/mimas" reqUser={true} component={Mimas} />

            <ProtectedRoute path="/uranus" reqUser={true} component={Uranus} />

            <ProtectedRoute path="/pluto" reqUser={true} component={Pluto} />
          </Route>
        </Switch>
      </aside>
    </Router>
  );
}

function mapStateToProps(state) {
  return { clienttag: state.client.clienttag };
}

const mapDispatchToProps = {
  clearFavorites,
  clearClient,
  clearSearch,
  clearTourIns,
  clearForm,
  clearPod,
  clearTourInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
