import React from "react";
import { connect } from "react-redux";
import {
  clearClient, clearTourInfo, clearForm, clearApod, clearSearch, clearFavorites, clearContactUs} from "./redux/actions";

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
import Apod from "./components/Apod";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";


function App({
  clienttag,
  clearTourInfo,
  clearForm,
  clearApod,
  clearSearch,
  clearFavorites,
  clearContactUs,
  clearClient
  
  
   
}) {
  return (
    <Router>

      <nav>
        {" "}
        {!clienttag && (
           <NavLink activeClassName="active" className="menuitem" to="/login">
            {" "}
          </NavLink> 
        )}{" "}
        {clienttag && (
     <ul>   
<div className="menu1">
           <li>  <NavLink activeClassName="active" className="menu1item" to="/tourinfo"
            > Tour Info{" "}
            </NavLink></li> 
            
          <li>   <NavLink activeClassName="active" className="menu1item" to="/form">
              Tour Order Form{" "}
            </NavLink></li> 

        <li>     <NavLink activeClassName="active" className="menu1item" to="/apod">
              Apod (Photo of the Day -Astronomy){" "}
              </NavLink></li> 

           <li>  <NavLink activeClassName="active" className="menu1item" to="/search">
              Search{" "}
            </NavLink></li> 

         <li>    <NavLink activeClassName="active" className="menu1item" to="/favorites">
              Favorites{" "} </NavLink></li>

           <li> <NavLink activeClassName="active" className="menu1item" to="/form">
              Contact Us{" "}
            </NavLink></li> 

        <li>    <NavLink
              className="presenter"
              to="/login"
              onClick={() => {
                clearTourInfo();
                clearForm();
                clearApod();
                clearSearch();
                clearFavorites();
                clearContactUs();
                clearClient();
              }}
            >
              Logout
            </NavLink></li>
          </div></ul>
        )}
      </nav>

      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          
          <Route path="*">  <Redirect to="/login" />

            <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

            <ProtectedRoute path="/form" reqUser={true} component={Form} />
          
            <ProtectedRoute path="/apod" reqUser={true} component={Apod} />
                        
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
clearApod,
clearSearch,
clearFavorites,
clearContactUs, 
clearClient
 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
