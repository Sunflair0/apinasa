import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setClienttag } from "./redux/actions";
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
import LoginPage from "./pages/LoginPage";
import ContactUs from "./pages/ContactUs";
import EARTH from "./pages/EARTH";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Home from "./pages/Home";
import IPN from "./pages/IPN"
import ISS from "./pages/ISS"
import MER from "./pages/MER";
import MyItems from "./pages/MyItems";
import MyPage from "./pages/MyPage";
import MySalutes from "./pages/MySalutes";
import MyTrip from "./pages/MyTrip";
import NASA from "./pages/NASA";
import PagesTemplate from "./components/PagesTemplate";
import Testimonials from "./pages/Testimonials";
import TourInfo from "./components/TourInfo";
import TourAddOns from "./components/TourAddOns";
import VentureTours from "./pages/VentureTours";
import TravelNow from "./pages/TravelNow";
import Purchases from "./pages/Purchases";
import PresentLocation from "./pages/PresentLocation";

function App({ clienttag, setClienttag }) {
  const { verify } = useAPI();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyClienttag = async () => {
      const res = await verify();

      setLoading(false);
      if (res.success) {
        setClienttag(res.data.clienttag);
      }
    };
    verifyClienttag();
  }, [setClienttag, verify]);

  return (
    <>
      {!loading && (
        <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
          <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>
            <ToggleProvider>
              <div className="flex_backing">
                <Router >
                  <Routes>
                    <Route path="loginpage" element={<ProtectedRoute isPrivate={false}><LoginPage /></ProtectedRoute>} />

                    <Route path="/" element={<ProtectedRoute isPrivate={true}><PagesTemplate /></ProtectedRoute>} >
                      <Route index element={<ProtectedRoute isPrivate={true}><Home /></ProtectedRoute>} />
                      <Route path="home" element={<ProtectedRoute isPrivate={true}><Home /></ProtectedRoute>} />
                      <Route path="about" element={<ProtectedRoute isPrivate={true}><About /></ProtectedRoute>} />
                      <Route path="nasa/" element={<ProtectedRoute isPrivate={true}><NASA /></ProtectedRoute>}>
                        <Route path="apod/" element={<ProtectedRoute isPrivate={true}><APOD /></ProtectedRoute>}>
                          <Route index element={<ProtectedRoute isPrivate={true}><div><ApodToday /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodtoday" element={<ProtectedRoute isPrivate={true}><div><ApodToday /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodchoose" element={<ProtectedRoute isPrivate={true}><div><ApodChoose /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodrange" element={<ProtectedRoute isPrivate={true}><div><ApodRange /></div></ProtectedRoute>} />
                          <Route path="nasa/apod/apodgimme5" element={<ProtectedRoute isPrivate={true}><div><ApodGimme5 /></div></ProtectedRoute>} />
                        </Route>
                        <Route path="mer" element={<ProtectedRoute isPrivate={true}><MER /></ProtectedRoute>} />
                        <Route path="earth" element={<ProtectedRoute isPrivate={true}><EARTH /></ProtectedRoute>} />
                        <Route path="iss" element={<ProtectedRoute isPrivate={true}><ISS /></ProtectedRoute>} />
                      </Route>
                      <Route path="mypage" element={<ProtectedRoute isPrivate={true}><MyPage /></ProtectedRoute>}>
                        <Route path="album" element={<ProtectedRoute isPrivate={true}><Album /></ProtectedRoute>} />
                        <Route path="IPN" element={<ProtectedRoute isPrivate={true}><IPN /></ProtectedRoute>} />
                        <Route path="mysalutes" element={<ProtectedRoute isPrivate={true}><MySalutes /></ProtectedRoute>} />
                        <Route path="dailyreward" element={<ProtectedRoute isPrivate={true}><DailyReward /></ProtectedRoute>} />
                        <Route path="purchases" element={<ProtectedRoute isPrivate={true}><Purchases /></ProtectedRoute>} >
                          <Route path="mytrip" element={<ProtectedRoute isPrivate={true}><MyTrip /></ProtectedRoute>} />
                          <Route path="myitems" element={<ProtectedRoute isPrivate={true}><MyItems /></ProtectedRoute>} />
                        </Route>
                        <Route path="travelnow" element={<ProtectedRoute isPrivate={true}><TravelNow /></ProtectedRoute>} />
                        <Route path="presentlocation" element={<ProtectedRoute isPrivate={true}><PresentLocation /></ProtectedRoute>} />
                      </Route>
                      <Route path="venturetours" element={<ProtectedRoute isPrivate={true}><VentureTours /></ProtectedRoute>} >
                        <Route path=":tourId" element={<ProtectedRoute isPrivate={true}><TourInfo /></ProtectedRoute>} />
                        <Route path=":addOnsID" element={<ProtectedRoute isPrivate={true}><TourAddOns /></ProtectedRoute>} />
                      </Route>
                      <Route path="testimonials" element={<ProtectedRoute isPrivate={true}><Testimonials /></ProtectedRoute>} />
                      <Route path="contactus" element={<ProtectedRoute isPrivate={true}><ContactUs /></ProtectedRoute>}>
                        <Route path="form" element={<ProtectedRoute isPrivate={true}><Form /></ProtectedRoute>} />
                      </Route>
                      <Route path="*" element={<ProtectedRoute isPrivate={true}><Error /></ProtectedRoute>} />
                    </Route>
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
  return { clienttag: state.clienttag };
};

const mapDispatchToProps = {
  setClienttag
};

export default connect(mapStateToProps, mapDispatchToProps)(App);