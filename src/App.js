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
import { ToggleProvider } from "./ToggleContext";
import "./App.css";
import "./tourguide.css";
import "./planet.css";
import ProtectedRoute from "./shared/ProtectedRoute";
import About from "./pages/About";
import Album from "./pages/Album";
import APOD from "./pages/APOD";
import ApodToday from "./pages/ApodToday";
import ApodChoose from "./pages/ApodChoose";
import ApodGimme5 from "./pages/ApodGimme5";
import ApodRange from "./pages/ApodRange";
import BigCube from "./components/BigCube";
import BuyVent from "./components/BuyVent";

import LoginPage from "./pages/LoginPage";
import ContactUs from "./pages/ContactUs";
import EARTH from "./pages/EARTH";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Ipn from "./pages/Ipn"

import MER from "./pages/MER";
import MyPage from "./pages/MyPage";
import NASA from "./pages/NASA";
import PagesTemplate from "./components/PagesTemplate";

import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import TourInfo from "./components/TourInfo";
import TourAddOns from "./components/TourAddOns";
import VentureTours from "./pages/VentureTours";


function App({ clienttag, clearBigCube, clearForm, clearApod, clearAlbum, clearClient, clearContactUs, clearBuyVent }
) {

  return (

    <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
      <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>

        <ToggleProvider>
          <div className="flex_backing">
            <Router >
              <Routes>

                {/* {!clienttag && ()} */}
                <Route path="loginpage" element={<LoginPage />} />


                <Route path="/" element={<PagesTemplate />} >
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="nasa" element={<NASA />}>
                    <Route path="apod" element={<APOD />}>
                      <Route path="apodtoday" element={<ApodToday />} />
                      <Route path="apodchoose" element={<ApodChoose />} />
                      <Route path="apodrange" element={<ApodRange />} />
                      <Route path="apodgimme5" element={<ApodGimme5 />} />
                    </Route>
                    <Route path="mer" element={<MER />}>
                    </Route>
                    <Route path="earth" element={<EARTH />}>
                    </Route>
                  </Route>
                  <Route path="mypage" element={<MyPage />}>
                    <Route path="album" element={<Album />} />
                    <Route path="mypage" element={<MyPage />} />
                  </Route>
                  <Route path="venturetours" element={<VentureTours />} />
                  <Route path="venturetours/:tourId" element={<TourInfo />} />
                  <Route path="venturetours/:addOnsID" element={<TourAddOns />} />

                  <Route path="contactus" element={<ContactUs />}>
                    <Route path="form" element={<Form />} />
                  </Route>
                  <Route path="*" element={<Error />} />
                </Route>
             
              {clienttag && (
                <>

                  <ul>            

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

                <ProtectedRoute path="/TourAddOns" reqUser={true} component={TourAddOns} />

                <ProtectedRoute path="/ventconsole" reqUser={true} component={VentConsole} />

                <ProtectedRoute path="/venturetour" reqUser={true} component={VentureTours} /> */}

                {/* <Route path="*" element={<Error />} /> */}
              </>
            </Routes>

          </Router>
      </div>
    </ToggleProvider>
      </div >
    </div >
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