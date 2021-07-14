import React from "react";
import { connect } from "react-redux";
import {
  clearClient, clearTourInfo, clearForm, clearPod, clearSearch, clearFavorites, clearContactUs} from "./redux/actions";

import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import TourInfo from "./components/TourInfo";
import Form from "./components/Form";
import Pod from "./components/Pod";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";


function App({
  clienttag,
  clearTourInfo,
  clearForm,
  clearPod,
  clearSearch,
  clearFavorites,
  clearContactUs,
  clearClient
  
  
   
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
            <NavLink activeClassName="active" className="presenter" to="/tourinfo"
            > Tour Info{" "}
            </NavLink>
            
            <NavLink activeClassName="active" className="presenter" to="/form">
              Tour Order Form{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/pod">
              POD (Photo of the Day -Astronomy){" "}
              </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/search">Search{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/favorites">
              Favorites{" "} </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/form">
              Contact Us{" "}
            </NavLink>

            <NavLink
              className="presenter"
              to="/login"
              onClick={() => {
                clearTourInfo();
                clearForm();
                clearPod();
                clearSearch();
                clearFavorites();
                clearContactUs();
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
          
          <Route path="*">  <Redirect to="/login" />

            <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

            <ProtectedRoute path="/form" reqUser={true} component={Form} />
          
            <ProtectedRoute path="/pod" reqUser={true} component={Pod} />
                        
            <ProtectedRoute path="/search" reqUser={true} component={Search} />
            
            <ProtectedRoute path="/favorites" reqUser={true} component={Favorites}
            />
            <ProtectedRoute path="/contactus" reqUser={false} component={ContactUs} />
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
clearTourInfo,
clearForm,
clearPod,
clearSearch,
clearFavorites,
clearContactUs, 
clearClient
 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
