import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import {clearByDate, clearClient, clearContactUs, clearEndDate, clearFavorites, clearForm, clearSearch, clearStartDate, 
   clearTourInfo, clearTourIns} from "./redux/actions";
=======
import {
  clearClient, clearTourInfo, clearForm, clearApod, clearSearch, clearFavorites, clearContactUs} from "./redux/actions";
>>>>>>> master

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
import Purchases from "./components/Purchases";
import Form from "./components/Form";
import Apod from "./components/Apod";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";
import useFetch from "./hooks/useFetch";


function App(

clearclienttag,
clearByDate,
clearClient,
clearContactUs,
clearEndDate,
clearFavorites,
clearForm,
clearSearch,
clearStartDate,
clearTourInfo,
clearTourIns,
clearClient
) 

{useEffect(() => {
    if (clienttag === null) {
      return;
    }
    async function call() {
      const res = await getFavs(`/api/favorites/user/`);
      if (!res.success) {
        return console.error(res.error);
      }
      setFavorites(res.data);
    }
    call();
  }, [clienttag]);

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
<<<<<<< HEAD
              Apod (Astronomy){" "}
=======
              Apod (Photo of the Day -Astronomy){" "}
>>>>>>> master
              </NavLink>

            <NavLink activeClassName="active" className="presenter" to="/search">
              Search{" "}
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
                logout();

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

<Route path="*">  <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
      </Router>
  );
}
<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App);
=======

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
>>>>>>> master
