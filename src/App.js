import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setClient } from "./redux/actions";
import { verify } from "./hooks/useAPI";
import useAPI from "./hooks/useAPI";

import {
  BrowserRouter as Router, Routes, Route
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
import DailyReward from "./pages/DailyReward";
import ContactUs from "./pages/ContactUs";
import EARTH from "./pages/EARTH";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Home from "./pages/Home";
import IPN from "./pages/IPN"
import ISS from "./pages/ISS"
import LoginPage from "./pages/LoginPage";
import MER from "./pages/MER";
import MyItems from "./pages/MyItems";
import MyPage from "./pages/MyPage";
import MySalutes from "./pages/MySalutes";
import MyTrip from "./pages/MyTrip";
import NASA from "./pages/NASA";
import PagesTemplate from "./components/PagesTemplate";
import PresentLocation from "./pages/PresentLocation";
import Purchases from "./pages/Purchases";
import Testimonials from "./pages/Testimonials";
import TourInfo from "./components/TourInfo";
import TourAddOns from "./components/TourAddOns";
import TravelNow from "./pages/TravelNow";
import VentureTours from "./pages/VentureTours";

function App({ client, setClient, logout }) {
  const { verify } = useAPI();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const verifyClient = async () => {
      const res = await verify();

      setLoading(false);
      if (res.success) {
        setClient(res.data.clienttag);
      }
    };
    verifyClient();
  }, [setClient, verify]);

  

  return (
    <>
     {
     !loading && 
     ( 
        <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
          <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>
            <ToggleProvider>
              <div className="flex_backing">
                <Router >
                  <Routes>
                    <Route path="loginpage" element={<ProtectedRoute isPrivate={false}><LoginPage /></ProtectedRoute>} />

                    <Route path="/" element={<ProtectedRoute isPrivate={false}><PagesTemplate /></ProtectedRoute>} >
                      <Route index element={<ProtectedRoute isPrivate={false}><Home /></ProtectedRoute>} />
                      <Route path="home" element={<ProtectedRoute isPrivate={false}><Home /></ProtectedRoute>} />
                      
                      <Route path="about" element={<ProtectedRoute isPrivate={false}><About /></ProtectedRoute>} />
                      <Route path="nasa/" element={<ProtectedRoute isPrivate={false}><NASA /></ProtectedRoute>}>
                        <Route path="apod/" element={<ProtectedRoute isPrivate={false}><APOD /></ProtectedRoute>}>
                          <Route path="nasa/apod/apodtoday" element={<ProtectedRoute isPrivate={false}><div><ApodToday /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodchoose" element={<ProtectedRoute isPrivate={false}><div><ApodChoose /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodrange" element={<ProtectedRoute isPrivate={false}><div><ApodRange /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodgimme5" element={<ProtectedRoute isPrivate={false}><div><ApodGimme5 /></div></ProtectedRoute>} />
                        </Route>
                        <Route path="mer" element={<ProtectedRoute isPrivate={false}><MER /></ProtectedRoute>} />
                        <Route path="earth" element={<ProtectedRoute isPrivate={false}><EARTH /></ProtectedRoute>} />
                        <Route path="iss" element={<ProtectedRoute isPrivate={false}><ISS /></ProtectedRoute>} />
                      </Route>
                      <Route path="mypage" element={<ProtectedRoute isPrivate={false}><MyPage /></ProtectedRoute>}>
                        <Route path="album" element={<ProtectedRoute isPrivate={false}><Album /></ProtectedRoute>} />
                        <Route path="IPN" element={<ProtectedRoute isPrivate={false}><IPN /></ProtectedRoute>} />
                        <Route path="mysalutes" element={<ProtectedRoute isPrivate={false}><MySalutes /></ProtectedRoute>} />
                        <Route path="dailyreward" element={<ProtectedRoute isPrivate={false}><DailyReward /></ProtectedRoute>} />
                        <Route path="purchases" element={<ProtectedRoute isPrivate={false}><Purchases /></ProtectedRoute>} >
                                                  <Route path="purchases/:tourId" element={<ProtectedRoute isPrivate={false}><TourInfo /></ProtectedRoute>} />

                          <Route path="mytrip" element={<ProtectedRoute isPrivate={false}><MyTrip /></ProtectedRoute>} />
                          <Route path="myitems" element={<ProtectedRoute isPrivate={false}><MyItems /></ProtectedRoute>} />
                        </Route>
                        <Route path="travelnow" element={<ProtectedRoute isPrivate={false}><TravelNow /></ProtectedRoute>} />
                        <Route path="presentlocation" element={<ProtectedRoute isPrivate={false}><PresentLocation /></ProtectedRoute>} />
                      </Route>
                      <Route path="venturetours" element={<ProtectedRoute isPrivate={false}><VentureTours /></ProtectedRoute>} />
                        <Route path="venturetours/:addOnsID" element={<ProtectedRoute isPrivate={false}><TourAddOns /></ProtectedRoute>} />
                      
                      <Route path="testimonials" element={<ProtectedRoute isPrivate={false}><Testimonials /></ProtectedRoute>} />
                      <Route path="contactus" element={<ProtectedRoute isPrivate={false}><ContactUs /></ProtectedRoute>}>
                        <Route path="form" element={<ProtectedRoute isPrivate={false}><Form /></ProtectedRoute>} />
                      </Route>
                      </Route>
                      <Route path="*" element={<ProtectedRoute isPrivate={false}><Error /></ProtectedRoute>} />              
                   
                  </Routes>
                </Router>
              </div>
            </ToggleProvider>
          </div >
        </div >
     )}  
    </>
  );
};

const mapStateToProps = state => {
  return { client: state.client };
};

const mapDispatchToProps = {
  setClient
};

export default connect(mapStateToProps, mapDispatchToProps)(App);