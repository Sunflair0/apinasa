import React, { useState } from "react";
import { connect } from "react-redux";
import {
  clearForm, clearApod, clearAlbum, clearClient, clearContactUs,
  clearBigCube, clearBuyVent,
} from "./redux/actions";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {TGButtonsProvider} from "./TGButtonsContext";
import "./App.css";
import "./tourguide.css";
import "./planet.css";
import ProtectedRoute from "./shared/ProtectedRoute";
import Album from "./components/Album";
import ApodConsole from "./components/ApodConsole";
import ApodToday from "./components/ApodToday";
import ApodChoose from "./components/ApodChoose";
import ApodGimme5 from "./components/ApodGimme5";
import ApodRange from "./components/ApodRange";
import BigCube from "./components/BigCube";
import BuyVent from "./components/BuyVent";
import LoginPage from "./components/LoginPage";
import ContactUs from "./components/ContactUs";
import Earth from "./components/Earth";
import Form from "./components/Form";
import Ipn from "./components/Ipn"
import Login from "./components/Login";
import Mer from "./components/Mer";
import Signup from "./components/SignUp";
import Splash from "./components/Splash";
import TourGuideLight from "./components/TourGuideLight"
import TourGuideMessages from "./components/TourGuideMessages"
import TourInfo from "./components/TourInfo"
import TourIns from "./components/TourIns"
import VentConsole from "./components/VentConsole"
import VentureTour from "./components/VentureTour"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function App({ clienttag, clearBigCube, clearForm, clearApod, clearAlbum, clearClient, clearContactUs, clearBuyVent }
) {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <TGButtonsProvider>
    <Router>

      <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
        <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 800s linear infinite" }}>

          <nav>
            <div className="log-shell">

              {!clienttag && (
                <NavLink activeClassName="active" className="menuitem" to="/LoginPage">
                  {" "}
                </NavLink>
              )}{" "}

              {clienttag && (
                <>
                  {/*///// Main Menu Toggle */}

                  <div className="topMask"><h1 >SpaceTours <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                  </Link></h1>

                    <div className="menu1">

                      <nav className={sidebar ? 'main-menu-active ' : 'main-menu '}>


                        <ul className="flex2">

                          <div className="main-menu-items navbar-toggle ">

                            <Link to="#" className="menu-barsx">
                              <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </Link>
                          </div>


                          {/* ///// Main Menu */}


                          <li> <NavLink activeClassName="active" className=" menu1items" to="/splash">
                            HOME{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/apodconsole">
                            APOD {" "}
                          </NavLink></li>

                          <li><NavLink activeClassName="active" className="menu1items" to="/album">
                            Album{" "} </NavLink></li>

                          <li> <NavLink activeClassName="active" className=" menu1items" to="/tourinfo">
                            Tour Info{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className=" menu1items" to="/form">
                            Order{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/contactus">
                            Contact Us{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/mer">
                            MER {" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/earth">
                            Earth {" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/tourins">
                            Extras{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/ipn">
                            IPN{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/venturetour">
                            VentureTour{" "}
                          </NavLink></li>

                          <li> <NavLink activeClassName="active" className="menu1items" to="/ventconsole">
                            VentConsole{" "}
                          </NavLink></li>

                          <li> <NavLink
                            className="menu1items"
                            to="/LoginPage"
                            onClick={() => {
                              clearApod();
                              clearBigCube();
                              clearBuyVent();
                              clearClient()
                              clearContactUs();
                              clearAlbum();
                              clearForm();
                            }}
                          >
                            Logout
                          </NavLink></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </>
              )}</div>
          </nav>


          <main>
            <Switch>

              <ProtectedRoute path="/album" reqUser={true} component={Album} />

              <ProtectedRoute path="/bigcube" reqUser={true} component={BigCube} />

              <ProtectedRoute path="/buyvent" reqUser={true} component={BuyVent} />

              <ProtectedRoute path="/apodconsole" reqUser={true} component={ApodConsole} />

              <ProtectedRoute path="/apodtoday" reqUser={true} component={ApodToday} />

              <ProtectedRoute path="/apodchoose" reqUser={true} component={ApodChoose} />

              <ProtectedRoute path="/apodgimme5" reqUser={true} component={ApodGimme5} />

              <ProtectedRoute path="/apodrange" reqUser={true} component={ApodRange} />

              <ProtectedRoute path="/loginpage" reqUser={false} component={LoginPage} />

              <ProtectedRoute path="/contactus" reqUser={true} component={ContactUs} />

              <ProtectedRoute path="/earth" reqUser={true} component={Earth} />

              <ProtectedRoute path="/form" reqUser={true} component={Form} />

              <ProtectedRoute path="/ipn" reqUser={true} component={Ipn} />

              <ProtectedRoute path="/login" reqUser={false} component={Login} />

              <ProtectedRoute path="/mer" reqUser={true} component={Mer} />

              <ProtectedRoute path="/signup" reqUser={false} component={Signup} />

              <ProtectedRoute path="/splash" reqUser={true} component={Splash} />

              <ProtectedRoute path="/tourguidelight" reqUser={true} component={TourGuideLight} />

              <ProtectedRoute path="/tourguidemessages" reqUser={true} component={TourGuideMessages} />

              <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

              <ProtectedRoute path="/tourins" reqUser={true} component={TourIns} />

              <ProtectedRoute path="/ventconsole" reqUser={true} component={VentConsole} />

              <ProtectedRoute path="/venturetour" reqUser={true} component={VentureTour} />

              <Route path="*">

                <Redirect to="/loginpage" />
              </Route>
            </Switch>
          </main>
        </div>
      </div>

    </Router>
    </TGButtonsProvider>
  );
}

function mapStateToProps(state) {
  return { clienttag: state.client.clienttag };
}

const mapDispatchToProps = {
  clearForm,
  clearApod,
  clearAlbum,
  clearClient,
  clearContactUs,
  clearBigCube,
  clearBuyVent,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
