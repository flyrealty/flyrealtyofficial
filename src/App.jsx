import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Projects,
  About,
  Connect,
  PrivacyPolicy,
  Insights,
  Home,  
} from "./exports";
import NotFound from "./components/NotFound";
import Careers from "./components/careers";

import Business from "./components/Business";
import Auth from "./components/cms/Auth";
import Dashboard from "./components/cms/Dashboard";
import whatsappIcon from "./assets/whatsapp.png";

export default function App() {
  const redirectToWhatsApp = () => {
    const phoneNumber = "9844473355";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/insights" element={<NotFound />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>

      {/* WhatsApp Icon */}
      <div className="whatsapp-icon" onClick={redirectToWhatsApp}>
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </div>
    </BrowserRouter>
  );
}
