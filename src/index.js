import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
        </Router>
    </Provider>
  </React.StrictMode>


);