import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  clearForm, clearApod, clearAlbum, clearClient, clearContactUs,
  clearBigCube, clearBuyVent,
} from "./redux/actions";
import {
  BrowserRouter as Router, Routes, Route, Navigate, NavLink, Link,
  nav, footer
} from "react-router-dom";
import { TGButtonsProvider } from "./TGButtonsContext";
import "./App.css";
import "./tourguide.css";
import "./planet.css";
import ProtectedRoute from "./shared/ProtectedRoute";
import About from "./components/About";
import Album from "./components/Album";
import APOD from "./components/APOD";
import ApodToday from "./components/ApodToday";
import ApodChoose from "./components/ApodChoose";
import ApodGimme5 from "./components/ApodGimme5";
import ApodRange from "./components/ApodRange";
import BigCube from "./components/BigCube";
import BuyVent from "./components/BuyVent";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import ContactUs from "./components/ContactUs";
import EARTH from "./components/EARTH";
import Error from "./components/Error";
import Form from "./components/Form";
import Ipn from "./components/Ipn"
import Login from "./components/Login";
import MER from "./components/MER";
import MyPage from "./components/MyPage";
import NASA from "./components/NASA";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import TourGuideLight from "./components/TourGuideLight";
import TourGuideMessages from "./components/TourGuideMessages";
import TourInfo from "./components/TourInfo";
import TourIns from "./components/TourIns";
import VentConsole from "./components/VentConsole";
import VentureTours from "./components/VentureTours";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function App({ clienttag, clearBigCube, clearForm, clearApod, clearAlbum, clearClient, clearContactUs, clearBuyVent }
) {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (

    <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
      <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 800s linear infinite" }}>

        <TGButtonsProvider>
          <Router>
            <Routes>

              {/* {!clienttag && ()} */}
              <Route path="/" element={<LoginPage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="nasa" element={<NASA />}>
                <Route path="apod" element={<APOD />}>
                  <Route path="apodtoday" element={<ApodToday />}></Route>
                  <Route path="apodchoose" element={<ApodChoose />}></Route>
                  <Route path="apodrange" element={<ApodRange />}></Route>
                  <Route path="apodgimme5" element={<ApodGimme5 />}></Route>
                </Route>
                <Route path="mer" element={<MER />}>
                </Route>
                <Route path="earth" element={<EARTH />}>
                </Route>
              </Route>

              <Route path="mypage" element={<MyPage />} />
              <Route path="venturetours" element={<VentureTours />} />\
              <Route path="contactus" element={<ContactUs />} />
              <Route path="*" element={<Error />} />


              {clienttag && (
                <>
                  <nav>SpaceTours</nav>
                  <ul>
                    <li> <Route path="/" element={<Home />} > HOME
                    </Route></li>
                    <li> <Route path="/nasa" element={<NASA />}>NASA</Route></li>

                    <Link to="/apod">
                      APOD {" "}

                    </Link>
                    <Route activeClassName="active" className="menu1items" to="/mer">
                      MER {" "}
                    </Route>

                    <Route activeClassName="active" className="menu1items" to="/earth">
                      Earth {" "}
                    </Route>
                    <li> <Route path="about" element={<About />}>About</Route></li>
                    <li> <Route path="mypage" element={<MyPage />}>My Page</Route></li>
                    <li> <Route path="venturetours" element={<VentureTours />}>Tours</Route></li>
                    <li> <Route path="testimonials" element={<Testimonials />}>Salutes</Route></li>
                    <li> <Route path="contactus" element={<ContactUs />} >Contact Us</Route></li>

                    <footer></footer>


                    <li><Route activeClassName="active" className="menu1items" to="/album">
                      Album{" "} </Route></li>

                    <li> <Route activeClassName="active" className=" menu1items" to="/tourinfo">
                      Tour Info{" "}
                    </Route></li>

                    <li> <Route activeClassName="active" className=" menu1items" to="/form">
                      Order{" "}
                    </Route></li>

                    <li> <Route activeClassName="active" className="menu1items" to="/tourins">
                      Extras{" "}
                    </Route></li>

                    <li> <Route activeClassName="active" className="menu1items" to="/ipn">
                      IPN{" "}
                    </Route></li>

                    <li> <Route activeClassName="active" className="menu1items" to="/ventconsole">
                      VentConsole{" "}
                    </Route></li>

                    <li> <Route
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
                    </Route></li>
                  </ul>
                </>
              )}</Routes>

            <Routes>
              <>
                {/* <ProtectedRoute path="/album" reqUser={true} component={Album} />

                <ProtectedRoute path="/bigcube" reqUser={true} component={BigCube} />

                <ProtectedRoute path="/buyvent" reqUser={true} component={BuyVent} />

                <ProtectedRoute path="/apod" reqUser={true} component={APOD} />

                <ProtectedRoute path="/apodtoday" reqUser={true} component={ApodToday} />

                <ProtectedRoute path="/apodchoose" reqUser={true} component={ApodChoose} />

                <ProtectedRoute path="/apodgimme5" reqUser={true} component={ApodGimme5} />

                <ProtectedRoute path="/apodrange" reqUser={true} component={ApodRange} />

                <ProtectedRoute path="/loginpage" reqUser={false} component={LoginPage} />

                <ProtectedRoute path="/contactus" reqUser={true} component={ContactUs} />

                <ProtectedRoute path="/earth" reqUser={true} component={EARTH} />

                <ProtectedRoute path="/form" reqUser={true} component={Form} />

                <ProtectedRoute path="/ipn" reqUser={true} component={Ipn} />

                <ProtectedRoute path="/login" reqUser={false} component={Login} />

                <ProtectedRoute path="/mer" reqUser={true} component={MER} />

                <ProtectedRoute path=="home" reqUser={false} component={Signup} />

                <ProtectedRoute path="/home" reqUser={true} component={Home} />

                <ProtectedRoute path="/tourguidelight" reqUser={true} component={TourGuideLight} />

                <ProtectedRoute path="/tourguidemessages" reqUser={true} component={TourGuideMessages} />

                <ProtectedRoute path="/tourinfo" reqUser={true} component={TourInfo} />

                <ProtectedRoute path="/tourins" reqUser={true} component={TourIns} />

                <ProtectedRoute path="/ventconsole" reqUser={true} component={VentConsole} />

                <ProtectedRoute path="/venturetour" reqUser={true} component={VentureTours} /> */}

                {/* <Route path="*" element={<Error />} /> */}
              </>
            </Routes>

          </Router>
        </TGButtonsProvider>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { clienttag: state.client.clienttag };
};

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