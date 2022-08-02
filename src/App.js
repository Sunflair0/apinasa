import React, { } from "react";
import {
  Routes, Route
} from "react-router-dom";
import { ToggleProvider } from "./ToggleContext";
import "./styles/css/index.min.css";
import "./styles/css/tourguide.min.css";
import "./styles/css/planet.min.css";
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
import Admin from "./pages/Admin";
import Helper from "./components/Helper";

function App() {

  return (
    <>
      { 
        (
          <div style={{ backgroundImage: "url(../assets/stars.png)", zIndex: "-100" }}>
            <div style={{ backgroundImage: "url(../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>
              <ToggleProvider>
                <div className="flex_backing">
                  <Routes>
                    <Route path="loginpage" element={<LoginPage />} />

                   
                      <Route path="/" element={<PagesTemplate />} >
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />

                        <Route path="about" element={<About />} />
                        <Route path="nasa/" element={<NASA />}>
                          <Route path="apod/" element={<APOD />}>
                            <Route path="nasa/apod/apodtoday" element={<div><ApodToday /></div>} />
                            <Route path="nasa/apod/apodchoose" element={<div><ApodChoose /></div>} />
                            <Route path="nasa/apod/apodrange" element={<div><ApodRange /></div>} />
                            <Route path="nasa/apod/apodgimme5" element={<div><ApodGimme5 /></div>} />
                          </Route>
                          <Route path="mer" element={<MER />} />
                          <Route path="earth" element={<EARTH />} />
                          <Route path="iss" element={<ISS />} />
                        </Route>
                        <Route path="mypage" element={<MyPage />}>
                          <Route path="album" element={<Album />} />
                          <Route path="IPN" element={<IPN />} />
                          <Route path="mysalutes" element={<MySalutes />} />
                          <Route path="dailyreward" element={<DailyReward />} />
                          <Route path="purchases" element={<Purchases />} >
                            <Route path="purchases/:tourId" element={<TourInfo />} />

                            <Route path="mytrip" element={<MyTrip />} />
                            <Route path="myitems" element={<MyItems />} />
                          </Route>
                          <Route path="travelnow" element={<TravelNow />} />
                          <Route path="presentlocation" element={<PresentLocation />} />
                        </Route>
                        <Route path="venturetours" element={<VentureTours />} />
                        <Route path="venturetours/:addOnsID" element={<TourAddOns />} />

                        <Route path="testimonials" element={<Testimonials />} />
                        <Route path="contactus" element={<ContactUs />}>
                          <Route path="form" element={<Form />} />                        
                        </Route>
                          <Route path="helper" element={<Helper />} />
                      </Route>
                  
                    {/* <Route element={<allowedRoles={[2]} />} > */}
                    <Route path="admin" element={<Admin />} />
                    {/* </Route> */}
                    <Route path="*" element={<Error />} />

                  </Routes>

                </div>
              </ToggleProvider>
            </div >
          </div >
        )}
    </>
  );
};

export default (App);