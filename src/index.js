import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToggleProvider } from './ToggleContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleProvider>
        <Router>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Router>
      </ToggleProvider>
    </Provider>
  </React.StrictMode>


);