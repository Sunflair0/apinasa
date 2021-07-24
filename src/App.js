import React from "react";
import { connect } from "react-redux";
import { clienttag, clearTourInfo, clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs,
clearclienttag, clearByDate, clearEndDate, clearStartDate, } from  "./redux/actions";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import TourInfo from "./components/TourInfo";
import Purchases from "./components/Purchases";
import Form from "./components/Form";
import Apod from "./components/Apod";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";


function App({clienttag, clearTourInfo, clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs, clearclienttag, clearByDate, clearEndDate, clearStartDate}
) 

{
  return (
    <Router>
      <nav className="presenter">
        {" "}
        {!clienttag && (
          <NavLink activeClassName="active" className="presenter" to="/login">
            Login{" "}
          </NavLink>
        )}{" "}
<NavLink activeClassName="active" className="presenter" to="/signup"
></NavLink>
        {clienttag && (
          <>
            <NavLink activeClassName="active" className="presenter" to="/tourinfo"
            > Tour Info{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/purchases">
              Purchases{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/form">
              Tour Order Form{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/apod">
              Apod (Astronomy){" "}
              </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/search">
              Search{" "}
            </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/favorites">
              Favorites{" "} </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/contact">
              Contact Us{" "}
            </NavLink>

            <NavLink
              className="presenter" to="/login" onClick={() => {

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
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />

            <ProtectedRoute path="/signup" reqUser={false} component={Signup} />
          
            <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

            <ProtectedRoute path="/purchases" reqUser={true} component={Purchases} />

            <ProtectedRoute path="/form" reqUser={true} component={Form} />
          
            <ProtectedRoute path="/apod" reqUser={true} component={Apod} />
                        
            <ProtectedRoute path="/search" reqUser={true} component={Search} />
            
            <ProtectedRoute path="/favorites" reqUser={true} component={Favorites} />

            <ProtectedRoute path="/contactus" reqUser={false} component={ContactUs} />

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
clienttag,
clearTourInfo,
clearForm,
clearApod,
clearSearch,
clearFavorites,
clearClient,
clearContactUs,
clearclienttag,
clearByDate,
clearEndDate,
clearStartDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
