import {
  Routes, Route
} from "react-router-dom";
import { ToggleProvider } from "./context/ToggleContext";
import { DataProvider } from "./context/DataContext";
import "./index.css";
import About from "./pages/About/About";
import Album from "./pages/Album";
import APOD from "./pages/NASA/APOD/APOD";
import ApodToday from "./pages/NASA/APOD/ApodToday";
import ApodChoose from "./pages/NASA/APOD/ApodChoose";
import ApodGimme5 from "./pages/NASA/APOD/ApodGimme5";
import ApodRange from "./pages/NASA/APOD/ApodRange";
import DailyReward from "./pages/MyPage/DailyReward";
import ContactUs from "./pages/ContactUs";
import EARTH from "./pages/NASA/EARTH";
import Error404 from "./pages/Error404";
import Form from "./pages/Form";
import Home from "./pages/Home";
import IPN from "./pages/MyPage/IPN"
import ISS from "./pages/NASA/ISS"
import LoginPage from "./pages/LoginPage";
import MER from "./pages/NASA/MER";
import MyItems from "./pages/MyPage/MyItems";
import MyPage from "./pages/MyPage/MyPage";
import MySalutes from "./pages/MyPage/MySalutes";
import MyTrip from "./pages/MyPage/MyTrip";
import NASA from "./pages/NASA/NASA"
import Layout from "./pages/Layout";
import PresentLocation from "./pages/MyPage/PresentLocation";
import Transactions from "./pages/MyPage/Transactions";
import Testimonials from "./pages/Testimonials/Testimonials";
import TestRead from "./pages/Testimonials/TestRead";
import TestWrite from "./pages/Testimonials/TestWrite";
import TourInfo from "./components/TourHelpers/TourInfo";
// import TourAddOns from "./components/TourHelpers/TourAddOns";
import Intro from "./pages/About/Intro";
import AddOns from "./pages/About/AddOns";
import Game from "./pages/About/Game";
import ThisSite from "./pages/About/ThisSite";
import Tours from "./pages/About/Tours";
import TravelNow from "./pages/MyPage/TravelNow";
// import VentureTours from "./pages/VentureTours";
import Admin from "./pages/Admin";
import Junk from "./components/Junk";
import Profile from "./pages/MyPage/Profile";

function App() {

  return (
    <>
      {
        (
          <div style={{ backgroundImage: "url(../../assets/stars.png)", zIndex: "-100" }}>
            <div style={{ backgroundImage: "url(../../assets/twink.png)", zIndex: "-90", animation: "twink 700s linear infinite" }}>
              <DataProvider>
                <ToggleProvider>
                  <div className="flex_backing">
                    <Routes>
                      <Route path="loginpage" element={<LoginPage />} />
                      <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} >
                          <Route index element={<Intro />} />
                          <Route path="intro" element={<Intro />} />
                          <Route path="addons" element={<AddOns />} />
                          <Route path="game" element={<Game />} />
                          <Route path="thissite" element={<ThisSite />} />
                          <Route path="tours" element={<Tours />} />
                        </Route>

                        <Route path="nasa" element={<NASA />} />
                        <Route path="nasa/apod" element={<APOD />}>
                          <Route index element={<ApodToday />} />
                          <Route path="apodtoday" element={<ApodToday />} />
                          <Route path="apodchoose" element={<ApodChoose />} />
                          <Route path="apodrange" element={<ApodRange />} />
                          <Route path="apodgimme5" element={<ApodGimme5 />} />
                        </Route>
                        <Route path="nasa/mer" element={<MER />} />
                        <Route path="nasa/earth" element={<EARTH />} />
                        <Route path="nasa/iss" element={<ISS />} />

                        <Route path="mypage">
                          <Route index element={<MyPage />} />
                          <Route path="profile" element={<Profile />} />
                          <Route path="album" element={<Album />} />
                          <Route path="IPN" element={<IPN />} />
                          <Route path="mysalutes" element={<MySalutes />} />
                          <Route path="dailyreward" element={<DailyReward />} />
                          <Route path="transactions" element={<Transactions />} >
                            <Route path="transactions/:tourId" element={<TourInfo />} />
                            <Route path="mytrip" element={<MyTrip />} />
                            <Route path="myitems" element={<MyItems />} />
                          </Route>
                          <Route path="travelnow" element={<TravelNow />} />
                          <Route path="presentlocation" element={<PresentLocation />} />
                        </Route>
                        {/* <Route path="venturetours/*" element={<VentureTours />} /> */}
                        {/* <Route path="venturetours/:addOnsID" element={<TourAddOns />} /> */}

                        <Route path="testimonials" element={<Testimonials />} >
                          <Route path="read" element={<TestRead />} />
                          <Route path="write" element={<TestWrite />} />
                        </Route>
                        <Route path="contactus" element={<ContactUs />}>
                          <Route path="form" element={<Form />} />
                        </Route>
                        <Route path="junk" element={<Junk />} />
                      </Route>

                      {/* <Route element={<allowedRoles={[2]} />} > */}
                      <Route path="admin" element={<Admin />} />
                      {/* </Route> */}
                      <Route path="*" element={<Error404 />} />
                    </Routes>
                  </div>
                </ToggleProvider>
              </DataProvider>
            </div >
          // </div >
        )}
    </>
  );
};

export default (App);