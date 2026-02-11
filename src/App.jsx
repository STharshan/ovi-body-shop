import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";

import Detailing from "./page/Detailing";
import InsuranceJob from "./page/InsuranceJob";
import AccidentRepair from "./page/AccidentRepairs";
import Dent from "./page/Dent";
import PaintResprays from "./page/PaintResprays";
import PanelBeating from "./page/PanelBeating";

function AOSWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <AOSWrapper />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailing" element={<Detailing />} />
        <Route path="/insurance-job" element={<InsuranceJob />} />
        <Route path="/accident-repair" element={<AccidentRepair />} />
        <Route path="dent" element={<Dent />} />
        <Route path="/paint-respray" element={<PaintResprays />} />
        <Route path="/panel-beating" element={<PanelBeating />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
