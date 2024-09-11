import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("RD Exim International");

  return (
      <Router>
        <ScrollToTop>
          <Routes>
            <Route name="home" path="/rdexim" element={<Home />} />
            <Route name="contact" path="/rdexim/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
  );
}


export default App;
