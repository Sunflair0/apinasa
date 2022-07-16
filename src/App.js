import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  clearForm, clearApod, clearAlbum, clearClient, clearContactUs,
  clearBigCube, clearBuyVent,
} from "./redux/actions";
import {
  BrowserRouter as Router, Routes, Route, Navigate, NavLink, Link,
  nav
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


function App({ clienttag }
) {
  return (
    <>
      <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
        <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>

          <ToggleProvider>
            <div className="flex_backing">
              <Router >
                <Routes>
                  <Route path="loginpage" element={<ProtectedRoute isPrivate={false}> <LoginPage />
                  </ProtectedRoute>
                  }></Route>                  
                    <Route path="/" element={<ProtectedRoute isPrivate={false}><PagesTemplate /></ProtectedRoute>} >
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
                    <Route path=":tourId" element={<TourInfo />} />
                    <Route path=":addOnsID" element={<TourAddOns />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="contactus" element={<ContactUs />}>
                      <Route path="form" element={<Form />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                  </Route>

                </Routes>
              </Router>
            </div>
          </ToggleProvider>
        </div >
      </div >
    </>
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