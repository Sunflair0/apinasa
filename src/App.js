import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setClienttag } from "./redux/actions";
import { verify}  from "../src/hooks/useAPI";
import useAPI from "../src/hooks/useAPI";

import {
  BrowserRouter as Router, Routes, Route, Navigate
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
import MyPage from "./pages/MyPage";
import NASA from "./pages/NASA";
import PagesTemplate from "./components/PagesTemplate";
import Testimonials from "./pages/Testimonials";
import TourInfo from "./components/TourInfo";
import TourAddOns from "./components/TourAddOns";
import VentureTours from "./pages/VentureTours";

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
  }, []);

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

                    <Route path="/" element={<ProtectedRoute isPrivate={false}><PagesTemplate /></ProtectedRoute>} >
                      <Route index element={<ProtectedRoute isPrivate={false}><Home /></ProtectedRoute>} />
                      <Route path="home" element={<ProtectedRoute isPrivate={false}><Home /></ProtectedRoute>} />
                      <Route path="about" element={<ProtectedRoute isPrivate={false}><About /></ProtectedRoute>} />
                      <Route path="nasa/" element={<ProtectedRoute isPrivate={false}><NASA /></ProtectedRoute>}>

                        <Route path="apod/" element={<ProtectedRoute isPrivate={false}><APOD /></ProtectedRoute>}>

                          <Route index element={<ProtectedRoute isPrivate={false}><div><ApodToday /></div></ProtectedRoute>} />
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
                        <Route path="dailyreward" element={<ProtectedRoute isPrivate={false}><DailyReward /></ProtectedRoute>} />
                      </Route>
                      <Route path="venturetours" element={<ProtectedRoute isPrivate={false}><VentureTours /></ProtectedRoute>} >
                        <Route path=":tourId" element={<ProtectedRoute isPrivate={false}><TourInfo /></ProtectedRoute>} />
                        <Route path=":addOnsID" element={<ProtectedRoute isPrivate={false}><TourAddOns /></ProtectedRoute>} />
                      </Route>
                      <Route path="testimonials" element={<ProtectedRoute isPrivate={false}><Testimonials /></ProtectedRoute>} />
                      <Route path="contactus" element={<ProtectedRoute isPrivate={false}><ContactUs /></ProtectedRoute>}>
                        <Route path="form" element={<ProtectedRoute isPrivate={false}><Form /></ProtectedRoute>} />
                      </Route>
                      <Route path="*" element={<ProtectedRoute isPrivate={false}><Error /></ProtectedRoute>} />
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