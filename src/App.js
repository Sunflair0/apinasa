import React from "react";
import { connect } from "react-redux";
import { clienttag, clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs,
 clearBigCube, clearBuyVent, } from  "./redux/actions";
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
import Form from "./components/Form";
import Apod from "./components/Apod";
import Search from "./components/Search";
import BuyVent from "./components/BuyVent";
import BigCube from "./components/BigCube";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./shared/ProtectedRoute";


function App({clienttag, clearBigCube, clearForm, clearApod, clearSearch, clearFavorites, clearClient, clearContactUs, clearBuyVent}
) 

{
  return (
    <Router>

      <nav>
        {" "}
        {!clienttag && (
           <NavLink activeClassName="active" className="menuitem" to="/login">
            {" "}
          </NavLink> 
        )}{" "}
<NavLink activeClassName="active" className="presenter" to="/signup"
></NavLink>
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

           <li> <NavLink activeClassName="active" className="menu1item" to="/bigcube">
              bg{" "}
            </NavLink></li> 


           <li> <NavLink activeClassName="active" className="menu1item" to="/buyvent">
              vb{" "}
            </NavLink></li> 

        <li>    <NavLink
              className="presenter"
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
          </div></ul>
        )}
      </nav>

      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />

            <ProtectedRoute path="/signup" reqUser={false} component={Signup} />
          
            <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

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

<Switch>

<ProtectedRoute path="/bigcube" reqUser={false} component={BigCube} />

<ProtectedRoute path="/buyvent" reqUser={false} component={BuyVent} />

</Switch>

</Router>
  );
}

function mapStateToProps(state) {
  return { clienttag: state.client.clienttag };
}

const mapDispatchToProps = {
clienttag,
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
